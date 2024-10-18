import { personalDB } from '@/lib/db'; // Asegúrate de que esta ruta sea correcta
import { NextResponse } from 'next/server';
import { OkPacket, RowDataPacket } from 'mysql2'; // Asegúrate de que mysql2 esté instalado

// Obtener todos los registros de nómina (GET)
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const id_nomina = searchParams.get('id_nomina');

    if (id_nomina) {
        // Obtener una nómina específica por ID
        try {
            const [rows] = await personalDB.query<RowDataPacket[]>('SELECT * FROM nomina WHERE id_nomina = ?', [id_nomina]);
            if (rows.length === 0) {
                return NextResponse.json({ error: 'Nómina no encontrada' }, { status: 404 });
            }
            return NextResponse.json(rows[0]);
        } catch (error) {
            console.error('Error al obtener la nómina:', error);
            return NextResponse.json({ error: 'Error al obtener la nómina' }, { status: 500 });
        }
    } else {
        // Obtener todos los registros de nómina y ordenarlos por id_nomina
        try {
            const [rows] = await personalDB.query<RowDataPacket[]>('SELECT * FROM nomina ORDER BY id_nomina ASC');
            return NextResponse.json(rows);
        } catch (error) {
            console.error('Error al obtener los registros de nómina:', error);
            return NextResponse.json({ error: 'Error al obtener registros de nómina' }, { status: 500 });
        }
    }
}

// Crear un nuevo registro de nómina (POST)
export async function POST(req: Request) {
    try {
        const { id_empleado, periodo, salario, estatus } = await req.json();

        // Validar que se proporcionen todos los datos requeridos
        if (!id_empleado || !periodo || salario === undefined || !estatus) {
            return NextResponse.json({ error: 'Faltan datos requeridos' }, { status: 400 });
        }

        // Generar un nuevo ID para la nómina
        let newId: string = ''; // Inicializar newId
        let isDuplicate = true;

        while (isDuplicate) {
            const [lastNomina] = await personalDB.query<RowDataPacket[]>('SELECT id_nomina FROM nomina ORDER BY id_nomina DESC LIMIT 1');

            newId = lastNomina.length > 0 
                ? `NOM${(parseInt(lastNomina[0].id_nomina.replace('NOM', '')) + 1).toString().padStart(3, '0')}`
                : 'NOM001';

            // Verificar si el nuevo ID ya existe
            const [checkDuplicate] = await personalDB.query<RowDataPacket[]>('SELECT COUNT(*) AS count FROM nomina WHERE id_nomina = ?', [newId]);
            isDuplicate = checkDuplicate[0].count > 0;

            console.log(`Verificando ID: ${newId}, Duplicado: ${isDuplicate}`);
        }

        // Comprobar si el ID del empleado ya existe antes de intentar insertar
        const [existingEmployee] = await personalDB.query<RowDataPacket[]>('SELECT * FROM empleado WHERE id_empleado = ?', [id_empleado]);
        if (existingEmployee.length === 0) {
            return NextResponse.json({ error: 'El ID del empleado no existe' }, { status: 400 });
        }

        // Insertar nueva nómina
        const [result] = await personalDB.query<OkPacket>(
            'INSERT INTO nomina (id_nomina, id_empleado, periodo, salario, estatus) VALUES (?, ?, ?, ?, ?)',
            [newId, id_empleado, periodo, salario, estatus]
        );

        // Verificar si se realizó la inserción
        if (result.affectedRows === 0) {
            return NextResponse.json({ error: 'No se pudo crear la nómina' }, { status: 500 });
        }

        return NextResponse.json({ message: 'Nómina creada exitosamente', id_nomina: newId });
    } catch (error) {
        console.error('Error al crear registro de nómina:', error);
        return NextResponse.json({ error: 'Error al crear registro de nómina' }, { status: 500 });
    }
}


// Actualizar un registro de nómina (PUT)
export async function PUT(req: Request) {
    try {
        const { id_nomina, id_empleado, periodo, salario, estatus } = await req.json();

        // Verificar que todos los datos requeridos están presentes
        if (!id_nomina || !id_empleado || !periodo || salario === undefined || !estatus) {
            return NextResponse.json({ error: 'Faltan datos requeridos' }, { status: 400 });
        }

        const [result] = await personalDB.query<OkPacket>(
            'UPDATE nomina SET id_empleado = ?, periodo = ?, salario = ?, estatus = ? WHERE id_nomina = ?',
            [id_empleado, periodo, salario, estatus, id_nomina]
        );

        // Verificar el resultado de la actualización
        if (result.affectedRows === 0) {
            return NextResponse.json({ error: 'Nómina no encontrada o no se realizaron cambios' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Registro de nómina actualizado exitosamente' });
    } catch (error) {
        console.error('Error al actualizar registro de nómina:', error);
        return NextResponse.json({ error: 'Error al actualizar registro de nómina' }, { status: 500 });
    }
}

// Eliminar un registro de nómina (DELETE)
export async function DELETE(req: Request) {
    try {
        const { id_nomina } = await req.json();
        if (!id_nomina) {
            return NextResponse.json({ error: 'ID de nómina no proporcionado' }, { status: 400 });
        }

        const [result] = await personalDB.query<OkPacket>('DELETE FROM nomina WHERE id_nomina = ?', [id_nomina]);

        if (result.affectedRows === 0) {
            return NextResponse.json({ error: 'Nómina no encontrada' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Registro de nómina eliminado exitosamente' });
    } catch (error) {
        console.error('Error al eliminar registro de nómina:', error);
        return NextResponse.json({ error: 'Error al eliminar registro de nómina' }, { status: 500 });
    }
}
