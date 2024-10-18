import mysql from 'mysql2/promise';

// Crear conexión a la base de datos "personal"
export const personalDB = mysql.createPool({
  host: 'basededatoshotel.mysql.database.azure.com', // o 'localhost'
  user: 'uvp',
  password: 'Zx0124val',
  database: 'personal',
  ssl: {
    rejectUnauthorized: false // Cambiar a true en producción
  },
  waitForConnections: true,
  connectionLimit: 15,
  queueLimit: 0
});

// Crear conexión a la base de datos "personal"
export const seguridadDB = mysql.createPool({
  host: 'basededatoshotel.mysql.database.azure.com', // o 'localhost'
  user: 'uvp',
  password: 'Zx0124val',
  database: 'seguridad',
  ssl: {
    rejectUnauthorized: false // Cambiar a true en producción
  },
  waitForConnections: true,
  connectionLimit: 15,
  queueLimit: 0
});

