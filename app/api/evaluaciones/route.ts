import { personalDB } from '@/lib/db'; // Asegúrate de que esta ruta sea correcta
import { NextResponse } from 'next/server';
import { OkPacket, RowDataPacket } from 'mysql2'; // Asegúrate de que mysql2 esté instalado

// Obtener todos los registros de evaluaciones (GET)
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const id_evaluacion = searchParams.get('id_evaluacion');

    if (id_evaluacion) {
        // Obtener una evaluación específica por ID
        try {
            const [rows] = await personalDB.query<RowDataPacket[]>('SELECT * FROM evaluacion WHERE id_evaluacion = ?', [id_evaluacion]);
            if (rows.length === 0) {
                return NextResponse.json({ error: 'Evaluación no encontrada' }, { status: 404 });
            }
            return NextResponse.json(rows[0]);
        } catch (error) {
            console.error('Error al obtener la evaluación:', error);
            return NextResponse.json({ error: 'Error al obtener la evaluación' }, { status: 500 });
        }
    } else {
        // Obtener todos los registros de evaluaciones y ordenarlos por id_evaluacion
        try {
            const [rows] = await personalDB.query<RowDataPacket[]>('SELECT * FROM evaluacion ORDER BY id_evaluacion ASC');
            return NextResponse.json(rows);
        } catch (error) {
            console.error('Error al obtener los registros de evaluaciones:', error);
            return NextResponse.json({ error: 'Error al obtener registros de evaluaciones' }, { status: 500 });
        }
    }
}
// Crear un nuevo registro de evaluación (POST)
export async function POST(req: Request) {
    try {
        const { id_empleado, fecha, puntuacion, comentarios, estatus } = await req.json();

        // Validar que se proporcionen todos los datos requeridos
        if (!id_empleado || !fecha || !puntuacion || !estatus) {
            return NextResponse.json({ error: 'Faltan datos requeridos' }, { status: 400 });
        }

        // Generar un nuevo ID para la evaluación
        let newId: string = ''; // Inicializar newId
        let isDuplicate = true;

        while (isDuplicate) {
            const [lastEvaluation] = await personalDB.query<RowDataPacket[]>('SELECT id_evaluacion FROM evaluacion ORDER BY id_evaluacion DESC LIMIT 1');

            newId = lastEvaluation.length > 0 
                ? `EVAL${(parseInt(lastEvaluation[0].id_evaluacion.replace('EVAL', '')) + 1).toString().padStart(3, '0')}`
                : 'EVAL001';

            // Verificar si el nuevo ID ya existe
            const [checkDuplicate] = await personalDB.query<RowDataPacket[]>('SELECT COUNT(*) AS count FROM evaluacion WHERE id_evaluacion = ?', [newId]);
            isDuplicate = checkDuplicate[0].count > 0;

            console.log(`Verificando ID: ${newId}, Duplicado: ${isDuplicate}`);
        }

        // Comprobar si el ID del empleado ya existe antes de intentar insertar
        const [existingEmployee] = await personalDB.query<RowDataPacket[]>('SELECT * FROM empleado WHERE id_empleado = ?', [id_empleado]);
        if (existingEmployee.length === 0) {
            return NextResponse.json({ error: 'El ID del empleado no existe' }, { status: 400 });
        }

        // Insertar nueva evaluación
        const [result] = await personalDB.query<OkPacket>(
            'INSERT INTO evaluacion (id_evaluacion, id_empleado, fecha, puntuacion, comentarios, estatus) VALUES (?, ?, ?, ?, ?, ?)',
            [newId, id_empleado, fecha, puntuacion, comentarios, estatus]
        );

        // Verificar si se realizó la inserción
        if (result.affectedRows === 0) {
            return NextResponse.json({ error: 'No se pudo crear la evaluación' }, { status: 500 });
        }

        return NextResponse.json({ message: 'Evaluación creada exitosamente', id_evaluacion: newId });
    } catch (error) {
        console.error('Error al crear registro de evaluación:', error);
        return NextResponse.json({ error: 'Error al crear registro de evaluación' }, { status: 500 });
    }
}



// Actualizar un registro de evaluación (PUT)
export async function PUT(req: Request) {
    try {
        const { id_evaluacion, id_empleado, fecha, puntuacion, comentarios, estatus } = await req.json();

        // Verificar que todos los datos requeridos están presentes
        if (!id_evaluacion || !id_empleado || !fecha || !puntuacion || !estatus) {
            return NextResponse.json({ error: 'Faltan datos requeridos' }, { status: 400 });
        }

        const [result] = await personalDB.query<OkPacket>(
            'UPDATE evaluacion SET id_empleado = ?, fecha = ?, puntuacion = ?, comentarios = ?, estatus = ? WHERE id_evaluacion = ?',
            [id_empleado, fecha, puntuacion, comentarios, estatus, id_evaluacion]
        );

        // Verificar el resultado de la actualización
        if (result.affectedRows === 0) {
            return NextResponse.json({ error: 'Evaluación no encontrada o no se realizaron cambios' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Registro de evaluación actualizado exitosamente' });
    } catch (error) {
        console.error('Error al actualizar registro de evaluación:', error);
        return NextResponse.json({ error: 'Error al actualizar registro de evaluación' }, { status: 500 });
    }
}

// Eliminar un registro de evaluación (DELETE)
export async function DELETE(req: Request) {
    try {
        const { id_evaluacion } = await req.json();
        if (!id_evaluacion) {
            return NextResponse.json({ error: 'ID de evaluación no proporcionado' }, { status: 400 });
        }

        const [result] = await personalDB.query<OkPacket>('DELETE FROM evaluacion WHERE id_evaluacion = ?', [id_evaluacion]);

        if (result.affectedRows === 0) {
            return NextResponse.json({ error: 'Evaluación no encontrada' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Registro de evaluación eliminado exitosamente' });
    } catch (error) {
        console.error('Error al eliminar registro de evaluación:', error);
        return NextResponse.json({ error: 'Error al eliminar registro de evaluación' }, { status: 500 });
    }
}
