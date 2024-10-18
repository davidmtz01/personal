import { seguridadDB } from '@/lib/db'; // Asegúrate de que esta ruta sea correcta
import { NextResponse } from 'next/server';
import { OkPacket, RowDataPacket } from 'mysql2'; // Asegúrate de que mysql2 esté instalado

// Obtener todos los registros de usuario (GET)
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const id_usuario = searchParams.get('id_usuario');

    if (id_usuario) {
        // Obtener un usuario específico por ID
        try {
            const [rows] = await seguridadDB.query<RowDataPacket[]>('SELECT * FROM usuario WHERE id_usuario = ?', [id_usuario]);
            if (rows.length === 0) {
                return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
            }
            return NextResponse.json(rows[0]);
        } catch (error) {
            console.error('Error al obtener el usuario:', error);
            return NextResponse.json({ error: 'Error al obtener el usuario' }, { status: 500 });
        }
    } else {
        // Obtener todos los registros de usuario
        try {
            const [rows] = await seguridadDB.query<RowDataPacket[]>('SELECT * FROM usuario');
            return NextResponse.json(rows);
        } catch (error) {
            console.error('Error al obtener los registros de usuario:', error);
            return NextResponse.json({ error: 'Error al obtener registros de usuario' }, { status: 500 });
        }
    }
}

// Obtener el siguiente ID de usuario
async function getNextUserId(): Promise<string> {
    const [result] = await seguridadDB.query<any>('SELECT COUNT(*) AS count FROM usuario');
    const nextId = result[0].count + 1;
    return `USR${nextId.toString().padStart(3, '0')}`; // Genera el ID como USR001, USR002, etc.
}

// Crear un nuevo registro de usuario (POST)
// Crear un nuevo registro de usuario (POST)
export async function POST(req: Request) {
  try {
      const { nombre_usuario, contrasena, id_rol, estatus } = await req.json();

      // Obtener el último id_usuario existente
      const [lastUser] = await seguridadDB.query<RowDataPacket[]>('SELECT id_usuario FROM usuario ORDER BY id_usuario DESC LIMIT 1');

      // Generar el nuevo id_usuario
      const newId = lastUser.length > 0 ? `USR${(parseInt(lastUser[0].id_usuario.replace('USR', '')) + 1).toString().padStart(3, '0')}` : 'USR001';

      // Insertar nuevo usuario
      await seguridadDB.query<OkPacket>(
          'INSERT INTO usuario (id_usuario, nombre_usuario, contrasena, id_rol, estatus) VALUES (?, ?, ?, ?, ?)',
          [newId, nombre_usuario, contrasena, id_rol, estatus]
      );

      return NextResponse.json({ message: 'Registro de usuario creado exitosamente', id_usuario: newId });
  } catch (error) {
      console.error('Error al crear registro de usuario:', error);
      return NextResponse.json({ error: 'Error al crear registro de usuario' }, { status: 500 });
  }
}


// Actualizar un registro de usuario (PUT)
export async function PUT(req: Request) {
    try {
        const { id_usuario, nombre_usuario, contrasena, id_rol, estatus } = await req.json();
        
        // Verificar que todos los datos requeridos están presentes
        if (!id_usuario || !nombre_usuario || !contrasena || !id_rol || !estatus) {
            return NextResponse.json({ error: 'Faltan datos requeridos' }, { status: 400 });
        }

        const [result] = await seguridadDB.query<OkPacket>(
            'UPDATE usuario SET nombre_usuario = ?, contrasena = ?, id_rol = ?, estatus = ? WHERE id_usuario = ?',
            [nombre_usuario, contrasena, id_rol, estatus, id_usuario]
        );

        // Verificar el resultado de la actualización
        if (result.affectedRows === 0) {
            return NextResponse.json({ error: 'Usuario no encontrado o no se realizaron cambios' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Registro de usuario actualizado exitosamente' });
    } catch (error) {
        console.error('Error al actualizar registro de usuario:', error);
        return NextResponse.json({ error: 'Error al actualizar registro de usuario' }, { status: 500 });
    }
}

// Eliminar un registro de usuario (DELETE)
export async function DELETE(req: Request) {
  try {
      const { id_usuario } = await req.json();
      if (!id_usuario) {
          return NextResponse.json({ error: 'ID de usuario no proporcionado' }, { status: 400 });
      }

      const [result] = await seguridadDB.query<OkPacket>('DELETE FROM usuario WHERE id_usuario = ?', [id_usuario]);

      if (result.affectedRows === 0) {
          return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
      }

      // Reindexar los usuarios después de la eliminación
      await reindexUsuarios();

      return NextResponse.json({ message: 'Registro de usuario eliminado exitosamente' });
  } catch (error) {
      console.error('Error al eliminar registro de usuario:', error);
      return NextResponse.json({ error: 'Error al eliminar registro de usuario' }, { status: 500 });
  }
}


// Reindexar usuarios
async function reindexUsuarios() {
    const [usuarios] = await seguridadDB.query<RowDataPacket[]>('SELECT * FROM usuario ORDER BY id_usuario');
    for (let i = 0; i < usuarios.length; i++) {
        const newId = `USR${(i + 1).toString().padStart(3, '0')}`;
        await seguridadDB.query<OkPacket>(
            'UPDATE usuario SET id_usuario = ? WHERE id_usuario = ?',
            [newId, usuarios[i].id_usuario]
        );
    }
}
