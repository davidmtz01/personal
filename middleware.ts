import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

// Extender el tipo NextRequest para incluir la propiedad 'user'
interface CustomNextRequest extends NextRequest {
  user?: any; // Ajusta el tipo según la estructura de tu token decodificado
}

export function middleware(req: CustomNextRequest) {
  const token = req.cookies.get('token')?.value; // Obtén el valor de la cookie

  if (!token) {
    return NextResponse.redirect('/login');
  }

  try {
    // Verificar el token JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded; // Asignar el usuario decodificado
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect('/login');
  }
}

export const config = {
  matcher: ['/ruta-protegida/:path*'], // Rutas protegidas
};
