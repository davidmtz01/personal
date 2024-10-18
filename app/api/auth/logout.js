// app/api/auth/logout.js
import { NextResponse } from 'next/server';

export async function POST(request) {
    // Aquí puedes eliminar la cookie de sesión o el token del almacenamiento local
    // Por ejemplo, si usas cookies:
    const res = NextResponse.json({ message: 'Logged out successfully' });

    // Elimina la cookie de sesión
    res.cookies.set('sessionId', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Solo en producción
        path: '/',
        expires: new Date(0), // Establecer la fecha de expiración en el pasado
    });

    return res;
}
