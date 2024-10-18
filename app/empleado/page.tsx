"use client"; // Asegúrate de tener este encabezado en la parte superior
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

// Definir la interfaz Empleado
interface Empleado {
    id_empleado: string;
    nombre: string;
    direccion: string;
    telefono: string;
    correo: string;
    fecha_ingreso: string;
    id_rol: string; // Asegurarse de incluir el id_rol
    estatus: string;
}

// Definir la interfaz Rol
interface Rol {
    id_rol: string;
    descripcion: string;
}

// Contenedor estilizado
const EmpleadoCardStyled = styled('div')`
    max-width: 600px;
    margin: auto;
    padding: 2rem;
    background-color: ${(props) => props.theme.colorBg2};
    border: 2px solid ${(props) => props.theme.borderColor2};
    border-radius: 1rem;
    height: 100%;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 0.5rem;
    }

    h1, h2 {
        color: ${(props) => props.theme.colorGrey0};
    }
`;

const StyledCard = styled(Card)`
    background-color: #000;
    border-radius: 1rem;
    margin-bottom: 1rem;
    border: 2px solid #fff;
`;

const StyledCardContent = styled(CardContent)`
    background-color: #000;
    color: #fff;
    border-top: 2px solid #fff;
    padding: 16px;
`;

const StyledCardHeader = styled(CardHeader)`
    background-color: #000;
    color: #fff;
    
    & .MuiCardHeader-title {
        color: #fff;
    }
    
    & .MuiCardHeader-subheader {
        color: #fff;
    }
`;

const StyledButtonContainer = styled('div')`
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
`;

export default function EmpleadoCard() {
    const [empleados, setEmpleados] = React.useState<Empleado[]>([]);
    const [rols, setRoles] = React.useState<Rol[]>([]); // Estado para los roles
    const router = useRouter();

    // Cargar empleados y roles al iniciar
    React.useEffect(() => {
        const fetchData = async () => {
            // Obtener empleados
            const responseEmpleados = await fetch('/api/empleados');
            const dataEmpleados: Empleado[] = await responseEmpleados.json();
            setEmpleados(dataEmpleados);

            // Obtener roles
            const responseRoles = await fetch('/api/rols');
            const dataRoles: Rol[] = await responseRoles.json();
            setRoles(dataRoles);
        };

        fetchData();
    }, []);

    const handleCrearEmpleado = () => {
        router.push('/crear-empleado'); // Redirigir a la página para crear empleado
    };

    const handleEditarEmpleado = (empleado: Empleado) => {
        router.push(`/editar-empleado/${empleado.id_empleado}`); // Redirigir a la página para editar empleado
    };

    const handleBorrarEmpleado = async (id_empleado: string) => {
        const response = await fetch(`/api/empleados`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id_empleado }), // Pasar el id_empleado en el cuerpo de la solicitud
        });

        if (response.ok) {
            setEmpleados((prev) => prev.filter((emp) => emp.id_empleado !== id_empleado));
            console.log('Empleado borrado:', id_empleado);
        }
    };

    return (
        <EmpleadoCardStyled>
            <h1 style={{ marginBottom: '16px', textAlign: 'center' }}>Gestión de Empleados</h1>
            <StyledButtonContainer>
                <Button variant="contained" color="primary" onClick={handleCrearEmpleado}>
                    Crear Empleado
                </Button>
            </StyledButtonContainer>
            {empleados.map((empleado) => {
                // Buscar el rol correspondiente
                const rol = rols.find(r => r.id_rol === empleado.id_rol);
                const descripcion = rol ? rol.descripcion : 'Desconocido'; // Manejar si no se encuentra

                return (
                    <StyledCard key={empleado.id_empleado}>
                        <StyledCardHeader
                            avatar={
                                <Avatar aria-label="empleado">
                                    {empleado.nombre.charAt(0)}
                                </Avatar>
                            }
                            title={`Nombre: ${empleado.nombre} (ID: ${empleado.id_empleado})`}
                            subheader={`Rol: ${descripcion} - Estatus: ${empleado.estatus} - Correo: ${empleado.correo}`}
                        />
                        <StyledCardContent>
                            <Typography variant="body2">
                                Dirección: {empleado.direccion} - Teléfono: {empleado.telefono} - Fecha de Ingreso: {empleado.fecha_ingreso}
                            </Typography>
                            <StyledButtonContainer>
                                <Button variant="outlined" color="secondary" onClick={() => handleEditarEmpleado(empleado)}>
                                    Editar
                                </Button>
                                <Button variant="outlined" color="error" onClick={() => handleBorrarEmpleado(empleado.id_empleado)}>
                                    Borrar
                                </Button>
                            </StyledButtonContainer>
                        </StyledCardContent>
                    </StyledCard>
                );
            })}
        </EmpleadoCardStyled>
    );
}
