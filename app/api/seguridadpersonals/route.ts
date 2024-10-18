import { personalDB } from '@/lib/db'; // Asegúrate de que esta ruta sea correcta
import { NextResponse } from 'next/server';
import { OkPacket, RowDataPacket } from 'mysql2'; // Asegúrate de que mysql2 esté instalado

// Obtener todos los registros de seguridad_personal (GET)
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const id_usuario = searchParams.get('id_usuario');

    if (id_usuario) {
        // Obtener un registro específico de seguridad_personal por ID
        try {
            const [rows] = await personalDB.query<RowDataPacket[]>('SELECT * FROM seguridad_personal WHERE id_usuario = ?', [id_usuario]);
            if (rows.length === 0) {
                return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
            }
            return NextResponse.json(rows[0]);
        } catch (error) {
            console.error('Error al obtener el registro:', error);
            return NextResponse.json({ error: 'Error al obtener el registro' }, { status: 500 });
        }
    } else {
        // Obtener todos los registros de seguridad_personal y ordenarlos por id_usuario
        try {
            const [rows] = await personalDB.query<RowDataPacket[]>('SELECT * FROM seguridad_personal ORDER BY id_usuario ASC');
            return NextResponse.json(rows);
        } catch (error) {
            console.error('Error al obtener los registros:', error);
            return NextResponse.json({ error: 'Error al obtener registros' }, { status: 500 });
        }
    }
}

// Crear un nuevo registro de seguridad_personal (POST)
export async function POST(req: Request) {
    try {
        const { usuario, contrasena, id_empleado, id_rol, estatus } = await req.json();

        // Validar que se proporcionen todos los datos requeridos
        if (!usuario || !contrasena || !id_empleado || !estatus) {
            return NextResponse.json({ error: 'Faltan datos requeridos' }, { status: 400 });
        }

        // Generar un nuevo ID para el usuario
        let newId: string = '';
        let isDuplicate = true;

        while (isDuplicate) {
            const [lastRecord] = await personalDB.query<RowDataPacket[]>('SELECT id_usuario FROM seguridad_personal ORDER BY id_usuario DESC LIMIT 1');

            newId = lastRecord.length > 0
                ? `USR${(parseInt(lastRecord[0].id_usuario.replace('USR', '')) + 1).toString().padStart(3, '0')}`
                : 'USR001';

            // Verificar si el nuevo ID ya existe
            const [checkDuplicate] = await personalDB.query<RowDataPacket[]>('SELECT COUNT(*) AS count FROM seguridad_personal WHERE id_usuario = ?', [newId]);
            isDuplicate = checkDuplicate[0].count > 0;

            console.log(`Verificando ID: ${newId}, Duplicado: ${isDuplicate}`);
        }

        // Verificar si el ID del empleado existe
        const [existingEmployee] = await personalDB.query<RowDataPacket[]>('SELECT * FROM empleado WHERE id_empleado = ?', [id_empleado]);
        if (existingEmployee.length === 0) {
            return NextResponse.json({ error: 'El ID del empleado no existe' }, { status: 400 });
        }

        // Insertar nuevo registro de seguridad_personal
        const [result] = await personalDB.query<OkPacket>(
            'INSERT INTO seguridad_personal (id_usuario, usuario, contrasena, id_empleado, id_rol, estatus) VALUES (?, ?, ?, ?, ?, ?)',
            [newId, usuario, contrasena, id_empleado, id_rol, estatus]
        );

        if (result.affectedRows === 0) {
            return NextResponse.json({ error: 'No se pudo crear el registro' }, { status: 500 });
        }

        return NextResponse.json({ message: 'Usuario creado exitosamente', id_usuario: newId });
    } catch (error) {
        console.error('Error al crear registro de usuario:', error);
        return NextResponse.json({ error: 'Error al crear registro de usuario' }, { status: 500 });
    }
}

// Actualizar un registro de seguridad_personal (PUT)
export async function PUT(req: Request) {
    try {
        const { id_usuario, usuario, contrasena, id_empleado, id_rol, estatus } = await req.json();

        // Verificar que todos los datos requeridos están presentes
        if (!id_usuario || !usuario || !contrasena || !id_empleado || !estatus) {
            return NextResponse.json({ error: 'Faltan datos requeridos' }, { status: 400 });
        }

        const [result] = await personalDB.query<OkPacket>(
            'UPDATE seguridad_personal SET usuario = ?, contrasena = ?, id_empleado = ?, id_rol = ?, estatus = ? WHERE id_usuario = ?',
            [usuario, contrasena, id_empleado, id_rol, estatus, id_usuario]
        );

        if (result.affectedRows === 0) {
            return NextResponse.json({ error: 'Usuario no encontrado o no se realizaron cambios' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Registro de usuario actualizado exitosamente' });
    } catch (error) {
        console.error('Error al actualizar registro de usuario:', error);
        return NextResponse.json({ error: 'Error al actualizar registro de usuario' }, { status: 500 });
    }
}

// Eliminar un registro de seguridad_personal (DELETE)
export async function DELETE(req: Request) {
    try {
        const { id_usuario } = await req.json();
        if (!id_usuario) {
            return NextResponse.json({ error: 'ID de usuario no proporcionado' }, { status: 400 });
        }

        const [result] = await personalDB.query<OkPacket>('DELETE FROM seguridad_personal WHERE id_usuario = ?', [id_usuario]);

        if (result.affectedRows === 0) {
            return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Registro de usuario eliminado exitosamente' });
    } catch (error) {
        console.error('Error al eliminar registro de usuario:', error);
        return NextResponse.json({ error: 'Error al eliminar registro de usuario' }, { status: 500 });
    }
}
