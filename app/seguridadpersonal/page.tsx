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

// Definir la interfaz para Seguridad Personal
interface SeguridadPersonal {
    id_usuario: string;
    usuario: string;
    contrasena: string;
    ultimo_acceso: string;
    id_empleado: string;
    id_rol: string;
    estatus: string;
    fecha_modificacion: string;
}

// Definir la interfaz para Empleado
interface Empleado {
    id_empleado: string;
    nombre: string;
    direccion: string;
    telefono: string;
    correo: string;
    fecha_ingreso: string;
    id_rol: string;
    estatus: string;
}

// Contenedor estilizado
const SeguridadPersonalCardStyled = styled('div')`
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

export default function SeguridadPersonalCard() {
    const [usuarios, setUsuarios] = React.useState<SeguridadPersonal[]>([]);
    const [empleados, setEmpleados] = React.useState<Empleado[]>([]); // Estado para empleados
    const router = useRouter();

    // Cargar usuarios de seguridad personal y empleados al iniciar
    React.useEffect(() => {
        const fetchData = async () => {
            const responseUsuarios = await fetch('/api/seguridadpersonals');
            const dataUsuarios: SeguridadPersonal[] = await responseUsuarios.json();
            setUsuarios(dataUsuarios);

            const responseEmpleados = await fetch('/api/empleados'); // Cargar empleados
            const dataEmpleados: Empleado[] = await responseEmpleados.json();
            setEmpleados(dataEmpleados);
        };

        fetchData();
    }, []);

    const handleCrearUsuario = () => {
        router.push('/crear-seguridadpersonal'); // Redirigir a la página para crear un nuevo usuario
    };

    const handleEditarUsuario = (usuario: SeguridadPersonal) => {
        router.push(`/editar-seguridadpersonal/${usuario.id_usuario}`); // Redirigir a la página para editar usuario
    };

    const handleBorrarUsuario = async (id_usuario: string) => {
        const response = await fetch(`/api/seguridadpersonals`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id_usuario }), // Pasar el id_usuario en el cuerpo de la solicitud
        });

        if (response.ok) {
            setUsuarios((prev) => prev.filter((user) => user.id_usuario !== id_usuario));
            console.log('Usuario borrado:', id_usuario);
        }
    };

    return (
        <SeguridadPersonalCardStyled>
            <h1 style={{ marginBottom: '16px', textAlign: 'center' }}>Gestión de Seguridad Personal</h1>
            <StyledButtonContainer>
                <Button variant="contained" color="primary" onClick={handleCrearUsuario}>
                    Crear Usuario
                </Button>
            </StyledButtonContainer>
            {usuarios.map((usuario) => {
                // Buscar el empleado correspondiente
                const empleado = empleados.find(emp => emp.id_empleado === usuario.id_empleado);
                const nombreEmpleado = empleado ? empleado.nombre : 'Desconocido'; // Manejar si no se encuentra el empleado

                return (
                    <StyledCard key={usuario.id_usuario}>
                        <StyledCardHeader
                            avatar={
                                <Avatar aria-label="usuario">
                                    {usuario.usuario.charAt(0)}
                                </Avatar>
                            }
                            title={`Usuario: ${usuario.usuario}`}
                            subheader={`Empleado: ${nombreEmpleado} - Último Acceso: ${usuario.ultimo_acceso} - Estatus: ${usuario.estatus}`}
                        />
                        <StyledCardContent>
                            <Typography variant="body2">
                                ID Usuario: {usuario.id_usuario} - Rol: {usuario.id_rol}
                            </Typography>
                            <StyledButtonContainer>
                                <Button variant="outlined" color="secondary" onClick={() => handleEditarUsuario(usuario)}>
                                    Editar
                                </Button>
                                <Button variant="outlined" color="error" onClick={() => handleBorrarUsuario(usuario.id_usuario)}>
                                    Borrar
                                </Button>
                            </StyledButtonContainer>
                        </StyledCardContent>
                    </StyledCard>
                );
            })}
        </SeguridadPersonalCardStyled>
    );
}
