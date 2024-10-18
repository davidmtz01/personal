import { personalDB } from '@/lib/db'; // Asegúrate de que esta ruta sea correcta
import { NextResponse } from 'next/server';
import { OkPacket, RowDataPacket } from 'mysql2'; // Asegúrate de que mysql2 esté instalado

// Obtener todos los registros de bitácora (GET)
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const id_bitacora = searchParams.get('id_bitacora');

    if (id_bitacora) {
        // Obtener una bitácora específica por ID
        try {
            const [rows] = await personalDB.query<RowDataPacket[]>('SELECT * FROM bitacora_personal WHERE id_bitacora = ?', [id_bitacora]);
            if (rows.length === 0) {
                return NextResponse.json({ error: 'Bitácora no encontrada' }, { status: 404 });
            }
            return NextResponse.json(rows[0]);
        } catch (error) {
            console.error('Error al obtener la bitácora:', error);
            return NextResponse.json({ error: 'Error al obtener la bitácora' }, { status: 500 });
        }
    } else {
        // Obtener todos los registros de bitácora y ordenarlos por id_bitacora
        try {
            const [rows] = await personalDB.query<RowDataPacket[]>('SELECT * FROM bitacora_personal ORDER BY id_bitacora ASC');
            return NextResponse.json(rows);
        } catch (error) {
            console.error('Error al obtener los registros de bitácora:', error);
            return NextResponse.json({ error: 'Error al obtener registros de bitácora' }, { status: 500 });
        }
    }
}

// Crear un nuevo registro de bitácora (POST)
export async function POST(req: Request) {
  try {
      const { id_empleado, accion } = await req.json();

      // Validar que se proporcionen todos los datos requeridos
      if (!id_empleado || !accion) {
          return NextResponse.json({ error: 'Faltan datos requeridos' }, { status: 400 });
      }

      // Generar un nuevo ID para la bitácora
      let newId: number;
      const [lastBitacora] = await personalDB.query<RowDataPacket[]>('SELECT id_bitacora FROM bitacora_personal ORDER BY id_bitacora DESC LIMIT 1');

      // Comprobar si se obtuvo el último ID correctamente
      if (lastBitacora.length > 0) {
          if (typeof lastBitacora[0].id_bitacora === 'number') {
              newId = lastBitacora[0].id_bitacora + 1;
          } else {
              console.error('El ID del último registro no es un número:', lastBitacora[0].id_bitacora);
              return NextResponse.json({ error: 'Error al calcular el nuevo ID de bitácora' }, { status: 500 });
          }
      } else {
          newId = 1; // Si no hay registros, empezamos desde 1
      }

      // Comprobar si el ID del empleado ya existe
      const [existingEmployee] = await personalDB.query<RowDataPacket[]>('SELECT * FROM empleado WHERE id_empleado = ?', [id_empleado]);
      if (existingEmployee.length === 0) {
          return NextResponse.json({ error: 'El ID del empleado no existe' }, { status: 400 });
      }

      // Insertar nueva bitácora
      const [result] = await personalDB.query<OkPacket>(
          'INSERT INTO bitacora_personal (id_bitacora, id_empleado, accion) VALUES (?, ?, ?)',
          [newId, id_empleado, accion]
      );

      // Verificar si se realizó la inserción
      if (result.affectedRows === 0) {
          return NextResponse.json({ error: 'No se pudo crear la bitácora' }, { status: 500 });
      }

      return NextResponse.json({ message: 'Bitácora creada exitosamente', id_bitacora: newId });
  } catch (error: unknown) {
      if (error instanceof Error) {
          console.error('Error al crear registro de bitácora:', error);
          return NextResponse.json({ error: `Error al crear registro de bitácora: ${error.message}` }, { status: 500 });
      } else {
          console.error('Error desconocido:', error);
          return NextResponse.json({ error: 'Error desconocido al crear registro de bitácora' }, { status: 500 });
      }
  }
}



// Actualizar un registro de bitácora (PUT)
export async function PUT(req: Request) {
    try {
        const { id_bitacora, id_empleado, accion } = await req.json();

        // Verificar que todos los datos requeridos están presentes
        if (!id_bitacora || !id_empleado || !accion) {
            return NextResponse.json({ error: 'Faltan datos requeridos' }, { status: 400 });
        }

        const [result] = await personalDB.query<OkPacket>(
            'UPDATE bitacora_personal SET id_empleado = ?, accion = ? WHERE id_bitacora = ?',
            [id_empleado, accion, id_bitacora]
        );

        // Verificar el resultado de la actualización
        if (result.affectedRows === 0) {
            return NextResponse.json({ error: 'Bitácora no encontrada o no se realizaron cambios' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Registro de bitácora actualizado exitosamente' });
    } catch (error) {
        console.error('Error al actualizar registro de bitácora:', error);
        return NextResponse.json({ error: 'Error al actualizar registro de bitácora' }, { status: 500 });
    }
}

// Eliminar un registro de bitácora (DELETE)
export async function DELETE(req: Request) {
    try {
        const { id_bitacora } = await req.json();
        if (!id_bitacora) {
            return NextResponse.json({ error: 'ID de bitácora no proporcionado' }, { status: 400 });
        }

        const [result] = await personalDB.query<OkPacket>('DELETE FROM bitacora_personal WHERE id_bitacora = ?', [id_bitacora]);

        if (result.affectedRows === 0) {
            return NextResponse.json({ error: 'Bitácora no encontrada' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Registro de bitácora eliminado exitosamente' });
    } catch (error) {
        console.error('Error al eliminar registro de bitácora:', error);
        return NextResponse.json({ error: 'Error al eliminar registro de bitácora' }, { status: 500 });
    }
}
