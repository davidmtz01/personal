import { NextResponse } from 'next/server';
import { seguridadDB } from '@/lib/db'; // Ajusta según la ubicación de tu archivo de conexión a la BD

// Obtener todos los roles (GET)
export async function GET() {
  try {
    const [rows] = await seguridadDB.query('SELECT * FROM rol');
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Error al obtener roles:', error);
    return NextResponse.json({ error: 'Error al obtener roles' }, { status: 500 });
  }
}

// Crear un nuevo rol (POST)
export async function POST(req: Request) {
  try {
    const { id_rol, nombre, descripcion } = await req.json();
    await seguridadDB.query(
      'INSERT INTO rol (id_rol, nombre, descripcion) VALUES (?, ?, ?)',
      [id_rol, nombre, descripcion]
    );
    return NextResponse.json({ message: 'Rol creado exitosamente' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error al crear rol' }, { status: 500 });
  }
}

// Actualizar un rol (PUT)
export async function PUT(req: Request) {
  try {
    const { id_rol, nombre, descripcion } = await req.json();
    await seguridadDB.query(
      'UPDATE rol SET nombre = ?, descripcion = ? WHERE id_rol = ?',
      [nombre, descripcion, id_rol]
    );
    return NextResponse.json({ message: 'Rol actualizado exitosamente' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error al actualizar rol' }, { status: 500 });
  }
}

// Eliminar un rol (DELETE)
export async function DELETE(req: Request) {
  try {
    const { id_rol } = await req.json();
    await seguridadDB.query('DELETE FROM rol WHERE id_rol = ?', [id_rol]);
    return NextResponse.json({ message: 'Rol eliminado exitosamente' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error al eliminar rol' }, { status: 500 });
  }
}
