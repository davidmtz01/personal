import { NextResponse } from 'next/server';
import { pool } from '@/lib/db'; // Importa tu configuración de conexión a la base de datos

export async function POST(req: Request) {
    const { username, password } = await req.json();

    // Aquí deberías agregar la lógica para verificar la contraseña usando bcrypt u otro método

    const [user] = await pool.query('SELECT * FROM usuario WHERE nombre_usuario = ?', [username]);

    if (user) {
        // Aquí deberías verificar la contraseña con bcrypt
        // if (bcrypt.compareSync(password, user.contrasena)) { ... }

        return NextResponse.json({
            username: user.nombre_usuario,
            role: user.id_rol, // Asegúrate de que este campo esté presente en tu tabla
            access: user.access // Este campo debe estar en la base de datos, o lo puedes construir manualmente
        });
    }

    return NextResponse.json({ message: 'Usuario o contraseña incorrectos' }, { status: 401 });
}
