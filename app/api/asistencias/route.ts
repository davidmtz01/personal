import { personalDB } from '@/lib/db'; // Asegúrate de que esta ruta sea correcta
import { NextResponse } from 'next/server';
import { OkPacket, RowDataPacket } from 'mysql2'; // Asegúrate de que mysql2 esté instalado

// Obtener todas las asistencias (GET)
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const id_asistencia = searchParams.get('id_asistencia');

    if (id_asistencia) {
        // Obtener una asistencia específica por ID
        try {
            const [rows] = await personalDB.query<RowDataPacket[]>('SELECT * FROM asistencia WHERE id_asistencia = ?', [id_asistencia]);
            if (rows.length === 0) {
                return NextResponse.json({ error: 'Asistencia no encontrada' }, { status: 404 });
            }
            return NextResponse.json(rows[0]);
        } catch (error) {
            console.error('Error al obtener la asistencia:', error);
            return NextResponse.json({ error: 'Error al obtener la asistencia' }, { status: 500 });
        }
    } else {
        // Obtener todas las asistencias
        try {
            const [rows] = await personalDB.query<RowDataPacket[]>('SELECT * FROM asistencia');
            return NextResponse.json(rows);
        } catch (error) {
            console.error('Error al obtener los registros de asistencia:', error);
            return NextResponse.json({ error: 'Error al obtener registros de asistencia' }, { status: 500 });
        }
    }
}

// Obtener el siguiente ID de asistencia
async function getNextAttendanceId(): Promise<string> {
    const [result] = await personalDB.query<any>('SELECT COUNT(*) AS count FROM asistencia');
    const nextId = result[0].count + 1;
    return `AST${nextId.toString().padStart(3, '0')}`; // Genera el ID como AST001, AST002, etc.
}

// Crear un nuevo registro de asistencia (POST)
export async function POST(req: Request) {
    try {
        const { id_empleado, fecha_ingreso, hora_entrada, hora_salida, estatus } = await req.json();

        // Obtener el último id_asistencia existente
        const [lastAttendance] = await personalDB.query<RowDataPacket[]>('SELECT id_asistencia FROM asistencia ORDER BY id_asistencia DESC LIMIT 1');

        // Generar el nuevo id_asistencia
        const newId = lastAttendance.length > 0 ? `AST${(parseInt(lastAttendance[0].id_asistencia.replace('AST', '')) + 1).toString().padStart(3, '0')}` : 'AST001';

        // Insertar nueva asistencia
        await personalDB.query<OkPacket>(
            'INSERT INTO asistencia (id_asistencia, id_empleado, fecha_ingreso, hora_entrada, hora_salida, estatus) VALUES (?, ?, ?, ?, ?, ?)',
            [newId, id_empleado, fecha_ingreso, hora_entrada, hora_salida, estatus]
        );

        return NextResponse.json({ message: 'Registro de asistencia creado exitosamente', id_asistencia: newId });
    } catch (error) {
        console.error('Error al crear registro de asistencia:', error);
        return NextResponse.json({ error: 'Error al crear registro de asistencia' }, { status: 500 });
    }
}

// Actualizar un registro de asistencia (PUT)
export async function PUT(req: Request) {
    try {
        const { id_asistencia, id_empleado, fecha_ingreso, hora_entrada, hora_salida, estatus } = await req.json();
        
        // Verificar que todos los datos requeridos están presentes
        if (!id_asistencia || !id_empleado || !fecha_ingreso || !estatus) {
            return NextResponse.json({ error: 'Faltan datos requeridos' }, { status: 400 });
        }

        const [result] = await personalDB.query<OkPacket>(
            'UPDATE asistencia SET id_empleado = ?, fecha_ingreso = ?, hora_entrada = ?, hora_salida = ?, estatus = ? WHERE id_asistencia = ?',
            [id_empleado, fecha_ingreso, hora_entrada, hora_salida, estatus, id_asistencia]
        );

        // Verificar el resultado de la actualización
        if (result.affectedRows === 0) {
            return NextResponse.json({ error: 'Asistencia no encontrada o no se realizaron cambios' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Registro de asistencia actualizado exitosamente' });
    } catch (error) {
        console.error('Error al actualizar registro de asistencia:', error);
        return NextResponse.json({ error: 'Error al actualizar registro de asistencia' }, { status: 500 });
    }
}

// Eliminar un registro de asistencia (DELETE)
export async function DELETE(req: Request) {
    try {
        const { id_asistencia } = await req.json();
        if (!id_asistencia) {
            return NextResponse.json({ error: 'ID de asistencia no proporcionado' }, { status: 400 });
        }

        const [result] = await personalDB.query<OkPacket>('DELETE FROM asistencia WHERE id_asistencia = ?', [id_asistencia]);

        if (result.affectedRows === 0) {
            return NextResponse.json({ error: 'Asistencia no encontrada' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Registro de asistencia eliminado exitosamente' });
    } catch (error) {
        console.error('Error al eliminar registro de asistencia:', error);
        return NextResponse.json({ error: 'Error al eliminar registro de asistencia' }, { status: 500 });
    }
}
