import { seguridadDB } from '@/lib/db'; // Asegúrate de que esta ruta sea correcta
import { NextResponse } from 'next/server';
import { RowDataPacket } from 'mysql2'; // Asegúrate de que mysql2 esté instalado
import bcrypt from 'bcrypt'; // Usar bcrypt para encriptar y comparar contraseñas

// Autenticar usuario (POST)
export async function POST(req: Request) {
  try {
    const { nombre_usuario, contrasena } = await req.json();

    // Verificar si el usuario existe en la base de datos
    const [rows] = await seguridadDB.query<RowDataPacket[]>( 
      'SELECT * FROM usuario WHERE nombre_usuario = ?', 
      [nombre_usuario]
    );

    if (rows.length === 0) {
      // Usuario no encontrado
      return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
    }

    const usuario = rows[0];

    // Para pruebas: Comparar la contraseña proporcionada con la almacenada
    const isPasswordCorrect = contrasena === usuario.contrasena; // Comparar directamente si es texto plano

    if (!isPasswordCorrect) {
      // Contraseña incorrecta
      return NextResponse.json({ error: 'Contraseña incorrecta' }, { status: 401 });
    }

    // Autenticación exitosa
    return NextResponse.json({ message: 'Inicio de sesión exitoso', usuario });
  } catch (error) {
    console.error('Error en el login:', error);
    return NextResponse.json({ error: 'Error en el servidor durante el login' }, { status: 500 });
  }
}
