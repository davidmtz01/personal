import { personalDB } from '@/lib/db'; // Asegúrate de que esta ruta sea correcta
import { NextResponse } from 'next/server';
import { OkPacket, RowDataPacket } from 'mysql2'; // Asegúrate de que mysql2 esté instalado

// Obtener todos los registros de empleados (GET)
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const id_empleado = searchParams.get('id_empleado');

    if (id_empleado) {
        // Obtener un empleado específico por ID
        try {
            const [rows] = await personalDB.query<RowDataPacket[]>('SELECT * FROM empleado WHERE id_empleado = ?', [id_empleado]);
            if (rows.length === 0) {
                return NextResponse.json({ error: 'Empleado no encontrado' }, { status: 404 });
            }
            return NextResponse.json(rows[0]);
        } catch (error) {
            console.error('Error al obtener el empleado:', error);
            return NextResponse.json({ error: 'Error al obtener el empleado' }, { status: 500 });
        }
    } else {
        // Obtener todos los registros de empleados y ordenarlos por id_empleado
        try {
            const [rows] = await personalDB.query<RowDataPacket[]>('SELECT * FROM empleado ORDER BY id_empleado ASC');
            return NextResponse.json(rows);
        } catch (error) {
            console.error('Error al obtener los registros de empleados:', error);
            return NextResponse.json({ error: 'Error al obtener registros de empleados' }, { status: 500 });
        }
    }
}

// Crear un nuevo registro de empleado (POST)
// Crear un nuevo registro de empleado (POST)
export async function POST(req: Request) {
  try {
      const { nombre, direccion, telefono, correo, fecha_ingreso, id_rol, estatus } = await req.json();

      // Validar que se proporcionen todos los datos requeridos
      if (!nombre || !direccion || !telefono || !correo || !fecha_ingreso || !id_rol || !estatus) {
          return NextResponse.json({ error: 'Faltan datos requeridos' }, { status: 400 });
      }

      let newId;
      let isDuplicate = true;

      // Generar el nuevo id_empleado
      while (isDuplicate) {
          const [lastEmployee] = await personalDB.query<RowDataPacket[]>('SELECT id_empleado FROM empleado ORDER BY id_empleado DESC LIMIT 1');

          newId = lastEmployee.length > 0 
              ? `EMP${(parseInt(lastEmployee[0].id_empleado.replace('EMP', '')) + 1).toString().padStart(3, '0')}`
              : 'EMP001';

          // Verificar si el nuevo ID ya existe
          const [checkDuplicate] = await personalDB.query<RowDataPacket[]>('SELECT COUNT(*) AS count FROM empleado WHERE id_empleado = ?', [newId]);
          isDuplicate = checkDuplicate[0].count > 0;

          console.log(`Verificando ID: ${newId}, Duplicado: ${isDuplicate}`);
      }

      // Comprobar si el ID ya existe antes de intentar insertar
      const [existingEmployee] = await personalDB.query<RowDataPacket[]>('SELECT * FROM empleado WHERE id_empleado = ?', [newId]);
      if (existingEmployee.length > 0) {
          return NextResponse.json({ error: 'El ID del empleado ya existe' }, { status: 400 });
      }

      // Insertar nuevo empleado
      const [result] = await personalDB.query<OkPacket>(
          'INSERT INTO empleado (id_empleado, nombre, direccion, telefono, correo, fecha_ingreso, id_rol, estatus) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
          [newId, nombre, direccion, telefono, correo, fecha_ingreso, id_rol, estatus]
      );

      // Verificar si se realizó la inserción
      if (result.affectedRows === 0) {
          return NextResponse.json({ error: 'No se pudo crear el empleado' }, { status: 500 });
      }

      return NextResponse.json({ message: 'Empleado creado exitosamente', id_empleado: newId });
  } catch (error) {
      console.error('Error al crear registro de empleado:', error);
      return NextResponse.json({ error: 'Error al crear registro de empleado' }, { status: 500 });
  }
}


// Actualizar un registro de empleado (PUT)
export async function PUT(req: Request) {
    try {
        const { id_empleado, nombre, direccion, telefono, correo, fecha_ingreso, id_rol, estatus } = await req.json();
        
        // Verificar que todos los datos requeridos están presentes
        if (!id_empleado || !nombre || !direccion || !telefono || !correo || !fecha_ingreso || !estatus) {
            return NextResponse.json({ error: 'Faltan datos requeridos' }, { status: 400 });
        }

        const [result] = await personalDB.query<OkPacket>(
            'UPDATE empleado SET nombre = ?, direccion = ?, telefono = ?, correo = ?, fecha_ingreso = ?, id_rol = ?, estatus = ? WHERE id_empleado = ?',
            [nombre, direccion, telefono, correo, fecha_ingreso, id_rol, estatus, id_empleado]
        );

        // Verificar el resultado de la actualización
        if (result.affectedRows === 0) {
            return NextResponse.json({ error: 'Empleado no encontrado o no se realizaron cambios' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Registro de empleado actualizado exitosamente' });
    } catch (error) {
        console.error('Error al actualizar registro de empleado:', error);
        return NextResponse.json({ error: 'Error al actualizar registro de empleado' }, { status: 500 });
    }
}

// Eliminar un registro de empleado (DELETE)
export async function DELETE(req: Request) {
    try {
        const { id_empleado } = await req.json();
        if (!id_empleado) {
            return NextResponse.json({ error: 'ID de empleado no proporcionado' }, { status: 400 });
        }

        const [result] = await personalDB.query<OkPacket>('DELETE FROM empleado WHERE id_empleado = ?', [id_empleado]);

        if (result.affectedRows === 0) {
            return NextResponse.json({ error: 'Empleado no encontrado' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Registro de empleado eliminado exitosamente' });
    } catch (error) {
        console.error('Error al eliminar registro de empleado:', error);
        return NextResponse.json({ error: 'Error al eliminar registro de empleado' }, { status: 500 });
    }
}
