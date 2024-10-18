import { personalDB } from '@/lib/db'; // Asegúrate de que esta ruta sea correcta
import { NextResponse } from 'next/server';
import { OkPacket, RowDataPacket } from 'mysql2'; // Asegúrate de que mysql2 esté instalado

// Obtener todos los registros de roles (GET)
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const id_rol = searchParams.get('id_rol');

    if (id_rol) {
        // Obtener un rol específico por ID
        try {
            const [rows] = await personalDB.query<RowDataPacket[]>('SELECT * FROM rol WHERE id_rol = ?', [id_rol]);
            if (rows.length === 0) {
                return NextResponse.json({ error: 'Rol no encontrado' }, { status: 404 });
            }
            return NextResponse.json(rows[0]);
        } catch (error) {
            console.error('Error al obtener el rol:', error);
            return NextResponse.json({ error: 'Error al obtener el rol' }, { status: 500 });
        }
    } else {
        // Obtener todos los registros de roles
        try {
            const [rows] = await personalDB.query<RowDataPacket[]>('SELECT * FROM rol ORDER BY id_rol ASC');
            return NextResponse.json(rows);
        } catch (error) {
            console.error('Error al obtener los registros de roles:', error);
            return NextResponse.json({ error: 'Error al obtener registros de roles' }, { status: 500 });
        }
    }
}

// Crear un nuevo registro de rol (POST)
export async function POST(req: Request) {
  try {
      const { descripcion } = await req.json();

      // Validar que se proporcione el dato requerido
      if (!descripcion) {
          return NextResponse.json({ error: 'Falta la descripción del rol' }, { status: 400 });
      }

      let newId;
      let isDuplicate = true;

      // Generar el nuevo id_rol
      while (isDuplicate) {
          const [lastRole] = await personalDB.query<RowDataPacket[]>('SELECT id_rol FROM rol ORDER BY id_rol DESC LIMIT 1');

          newId = lastRole.length > 0 
              ? `ROL${(parseInt(lastRole[0].id_rol.replace('ROL', '')) + 1).toString().padStart(3, '0')}`
              : 'ROL001';

          // Verificar si el nuevo ID ya existe
          const [checkDuplicate] = await personalDB.query<RowDataPacket[]>('SELECT COUNT(*) AS count FROM rol WHERE id_rol = ?', [newId]);
          isDuplicate = checkDuplicate[0].count > 0;

          console.log(`Verificando ID: ${newId}, Duplicado: ${isDuplicate}`);
      }

      // Comprobar si el ID ya existe antes de intentar insertar
      const [existingRole] = await personalDB.query<RowDataPacket[]>('SELECT * FROM rol WHERE id_rol = ?', [newId]);
      if (existingRole.length > 0) {
          return NextResponse.json({ error: 'El ID del rol ya existe' }, { status: 400 });
      }

      // Insertar nuevo rol
      const [result] = await personalDB.query<OkPacket>(
          'INSERT INTO rol (id_rol, descripcion) VALUES (?, ?)',
          [newId, descripcion]
      );

      // Verificar si se realizó la inserción
      if (result.affectedRows === 0) {
          return NextResponse.json({ error: 'No se pudo crear el rol' }, { status: 500 });
      }

      return NextResponse.json({ message: 'Rol creado exitosamente', id_rol: newId });
  } catch (error) {
      console.error('Error al crear registro de rol:', error);
      return NextResponse.json({ error: 'Error al crear registro de rol' }, { status: 500 });
  }
}

// Actualizar un registro de rol (PUT)
export async function PUT(req: Request) {
    try {
        const { id_rol, descripcion, estatus } = await req.json();

        // Verificar que todos los datos requeridos están presentes
        if (!id_rol || !descripcion || !estatus) {
            return NextResponse.json({ error: 'Faltan datos requeridos' }, { status: 400 });
        }

        const [result] = await personalDB.query<OkPacket>(
            'UPDATE rol SET descripcion = ?, estatus = ? WHERE id_rol = ?',
            [descripcion, estatus, id_rol]
        );

        // Verificar el resultado de la actualización
        if (result.affectedRows === 0) {
            return NextResponse.json({ error: 'Rol no encontrado o no se realizaron cambios' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Registro de rol actualizado exitosamente' });
    } catch (error) {
        console.error('Error al actualizar registro de rol:', error);
        return NextResponse.json({ error: 'Error al actualizar registro de rol' }, { status: 500 });
    }
}

// Eliminar un registro de rol (DELETE)
export async function DELETE(req: Request) {
    try {
        const { id_rol } = await req.json();
        if (!id_rol) {
            return NextResponse.json({ error: 'ID de rol no proporcionado' }, { status: 400 });
        }

        const [result] = await personalDB.query<OkPacket>('DELETE FROM rol WHERE id_rol = ?', [id_rol]);

        if (result.affectedRows === 0) {
            return NextResponse.json({ error: 'Rol no encontrado' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Registro de rol eliminado exitosamente' });
    } catch (error) {
        console.error('Error al eliminar registro de rol:', error);
        return NextResponse.json({ error: 'Error al eliminar registro de rol' }, { status: 500 });
    }
}
