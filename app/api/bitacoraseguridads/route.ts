import { seguridadDB } from '@/lib/db'; // Asegúrate de que esta ruta sea correcta
import { NextResponse } from 'next/server';
import { OkPacket, RowDataPacket } from 'mysql2'; // Asegúrate de que mysql2 esté instalado

// Obtener todos los registros de bitácora (GET)
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const id_bitacora = searchParams.get('id_bitacora');

    if (id_bitacora) {
        // Obtener una bitácora específica por ID
        try {
            const [rows] = await seguridadDB.query<RowDataPacket[]>('SELECT * FROM bitacora_seguridad WHERE id_bitacora = ?', [id_bitacora]);
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
            const [rows] = await seguridadDB.query<RowDataPacket[]>('SELECT * FROM bitacora_seguridad ORDER BY id_bitacora ASC');
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
        const { id_usuario, accion } = await req.json();

        // Validar que se proporcionen todos los datos requeridos
        if (!id_usuario || !accion) {
            return NextResponse.json({ error: 'Faltan datos requeridos' }, { status: 400 });
        }

        // Generar un nuevo ID para la bitácora
        let newId: string;
        const [lastBitacora] = await seguridadDB.query<RowDataPacket[]>('SELECT id_bitacora FROM bitacora_seguridad ORDER BY id_bitacora DESC LIMIT 1');

        // Comprobar si se obtuvo el último ID correctamente
        if (lastBitacora.length > 0) {
            const lastId = lastBitacora[0].id_bitacora;
            const match = lastId.match(/BIT(\d+)/); // Extraer el número del ID actual

            if (match) {
                const lastNumber = parseInt(match[1], 10); // Convertir a número
                const newNumber = lastNumber + 1; // Incrementar el número
                newId = `BIT${newNumber.toString().padStart(3, '0')}`; // Formatear con ceros a la izquierda
            } else {
                console.error('El ID del último registro no tiene el formato esperado:', lastId);
                return NextResponse.json({ error: 'Error al calcular el nuevo ID de bitácora' }, { status: 500 });
            }
        } else {
            newId = 'BIT001'; // Si no hay registros, comenzamos desde BIT001
        }

        // Comprobar si el ID del usuario ya existe
        const [existingUser] = await seguridadDB.query<RowDataPacket[]>('SELECT * FROM usuario WHERE id_usuario = ?', [id_usuario]);
        if (existingUser.length === 0) {
            return NextResponse.json({ error: 'El ID del usuario no existe' }, { status: 400 });
        }

        // Insertar nueva bitácora
        const [result] = await seguridadDB.query<OkPacket>(
            'INSERT INTO bitacora_seguridad (id_bitacora, id_usuario, accion) VALUES (?, ?, ?)',
            [newId, id_usuario, accion]
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
        const { id_bitacora, id_usuario, accion } = await req.json();

        // Verificar que todos los datos requeridos están presentes
        if (!id_bitacora || !id_usuario || !accion) {
            return NextResponse.json({ error: 'Faltan datos requeridos' }, { status: 400 });
        }

        const [result] = await seguridadDB.query<OkPacket>(
            'UPDATE bitacora_seguridad SET id_usuario = ?, accion = ? WHERE id_bitacora = ?',
            [id_usuario, accion, id_bitacora]
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

        const [result] = await seguridadDB.query<OkPacket>('DELETE FROM bitacora_seguridad WHERE id_bitacora = ?', [id_bitacora]);

        if (result.affectedRows === 0) {
            return NextResponse.json({ error: 'Bitácora no encontrada' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Registro de bitácora eliminado exitosamente' });
    } catch (error) {
        console.error('Error al eliminar registro de bitácora:', error);
        return NextResponse.json({ error: 'Error al eliminar registro de bitácora' }, { status: 500 });
    }
}
