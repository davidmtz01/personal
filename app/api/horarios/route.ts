import { personalDB } from '@/lib/db'; // Asegúrate de que esta ruta sea correcta
import { NextResponse } from 'next/server';
import { OkPacket, RowDataPacket } from 'mysql2'; // Asegúrate de que mysql2 esté instalado

// Obtener todos los registros de horarios (GET)
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const id_horario = searchParams.get('id_horario');

    if (id_horario) {
        // Obtener un horario específico por ID
        try {
            const [rows] = await personalDB.query<RowDataPacket[]>('SELECT * FROM horario WHERE id_horario = ?', [id_horario]);
            if (rows.length === 0) {
                return NextResponse.json({ error: 'Horario no encontrado' }, { status: 404 });
            }
            return NextResponse.json(rows[0]);
        } catch (error) {
            console.error('Error al obtener el horario:', error);
            return NextResponse.json({ error: 'Error al obtener el horario' }, { status: 500 });
        }
    } else {
        // Obtener todos los registros de horarios y ordenarlos por id_horario
        try {
            const [rows] = await personalDB.query<RowDataPacket[]>('SELECT * FROM horario ORDER BY id_horario ASC');
            return NextResponse.json(rows);
        } catch (error) {
            console.error('Error al obtener los registros de horarios:', error);
            return NextResponse.json({ error: 'Error al obtener registros de horarios' }, { status: 500 });
        }
    }
}

// Crear un nuevo registro de horario (POST)
export async function POST(req: Request) {
    try {
        const { id_empleado, fecha, hora_entrada, hora_salida, estatus } = await req.json();

        // Validar que se proporcionen todos los datos requeridos
        if (!id_empleado || !fecha || !hora_entrada || !hora_salida || !estatus) {
            return NextResponse.json({ error: 'Faltan datos requeridos' }, { status: 400 });
        }

        // Generar un nuevo ID para el horario
        let newId: string = ''; // Inicializar newId
        let isDuplicate = true;

        while (isDuplicate) {
            const [lastSchedule] = await personalDB.query<RowDataPacket[]>('SELECT id_horario FROM horario ORDER BY id_horario DESC LIMIT 1');

            newId = lastSchedule.length > 0 
                ? `HOR${(parseInt(lastSchedule[0].id_horario.replace('HOR', '')) + 1).toString().padStart(3, '0')}`
                : 'HOR001';

            // Verificar si el nuevo ID ya existe
            const [checkDuplicate] = await personalDB.query<RowDataPacket[]>('SELECT COUNT(*) AS count FROM horario WHERE id_horario = ?', [newId]);
            isDuplicate = checkDuplicate[0].count > 0;

            console.log(`Verificando ID: ${newId}, Duplicado: ${isDuplicate}`);
        }

        // Comprobar si el ID del empleado ya existe antes de intentar insertar
        const [existingEmployee] = await personalDB.query<RowDataPacket[]>('SELECT * FROM empleado WHERE id_empleado = ?', [id_empleado]);
        if (existingEmployee.length === 0) {
            return NextResponse.json({ error: 'El ID del empleado no existe' }, { status: 400 });
        }

        // Insertar nuevo horario
        const [result] = await personalDB.query<OkPacket>(
            'INSERT INTO horario (id_horario, id_empleado, fecha, hora_entrada, hora_salida, estatus) VALUES (?, ?, ?, ?, ?, ?)',
            [newId, id_empleado, fecha, hora_entrada, hora_salida, estatus]
        );

        // Verificar si se realizó la inserción
        if (result.affectedRows === 0) {
            return NextResponse.json({ error: 'No se pudo crear el horario' }, { status: 500 });
        }

        return NextResponse.json({ message: 'Horario creado exitosamente', id_horario: newId });
    } catch (error) {
        console.error('Error al crear registro de horario:', error);
        return NextResponse.json({ error: 'Error al crear registro de horario' }, { status: 500 });
    }
}

// Actualizar un registro de horario (PUT)
export async function PUT(req: Request) {
    try {
        const { id_horario, id_empleado, fecha, hora_entrada, hora_salida, estatus } = await req.json();

        // Verificar que todos los datos requeridos están presentes
        if (!id_horario || !id_empleado || !fecha || !hora_entrada || !hora_salida || !estatus) {
            return NextResponse.json({ error: 'Faltan datos requeridos' }, { status: 400 });
        }

        const [result] = await personalDB.query<OkPacket>(
            'UPDATE horario SET id_empleado = ?, fecha = ?, hora_entrada = ?, hora_salida = ?, estatus = ? WHERE id_horario = ?',
            [id_empleado, fecha, hora_entrada, hora_salida, estatus, id_horario]
        );

        // Verificar el resultado de la actualización
        if (result.affectedRows === 0) {
            return NextResponse.json({ error: 'Horario no encontrado o no se realizaron cambios' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Registro de horario actualizado exitosamente' });
    } catch (error) {
        console.error('Error al actualizar registro de horario:', error);
        return NextResponse.json({ error: 'Error al actualizar registro de horario' }, { status: 500 });
    }
}

// Eliminar un registro de horario (DELETE)
export async function DELETE(req: Request) {
    try {
        const { id_horario } = await req.json();
        if (!id_horario) {
            return NextResponse.json({ error: 'ID de horario no proporcionado' }, { status: 400 });
        }

        const [result] = await personalDB.query<OkPacket>('DELETE FROM horario WHERE id_horario = ?', [id_horario]);

        if (result.affectedRows === 0) {
            return NextResponse.json({ error: 'Horario no encontrado' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Registro de horario eliminado exitosamente' });
    } catch (error) {
        console.error('Error al eliminar registro de horario:', error);
        return NextResponse.json({ error: 'Error al eliminar registro de horario' }, { status: 500 });
    }
}
