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

// Definir la interfaz Rol
interface Rol {
    id_rol: string;
    descripcion: string;
}

// Contenedor estilizado
const RolCardStyled = styled('div')`
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

export default function RolPage() {
    const [roles, setRoles] = React.useState<Rol[]>([]);
    const router = useRouter();

    // Cargar roles al iniciar
    React.useEffect(() => {
        const fetchRoles = async () => {
            const response = await fetch('/api/rols');
            const data: Rol[] = await response.json();
            setRoles(data);
        };

        fetchRoles();
    }, []);

    const handleCrearRol = () => {
        router.push('/crear-rol'); // Redirigir a la página para crear rol
    };

    const handleEditarRol = (id_rol: string) => {
        router.push(`/editar-rol/${id_rol}`); // Redirigir a la página para editar rol
    };

    const handleBorrarRol = async (id_rol: string) => {
        const response = await fetch(`/api/rols`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id_rol }), // Pasar el id_rol en el cuerpo de la solicitud
        });

        if (response.ok) {
            setRoles((prev) => prev.filter((rol) => rol.id_rol !== id_rol));
            console.log('Rol borrado:', id_rol);
        }
    };

    return (
        <RolCardStyled>
            <h1 style={{ marginBottom: '16px', textAlign: 'center' }}>Gestión de Roles</h1>
            <StyledButtonContainer>
                <Button variant="contained" color="primary" onClick={handleCrearRol}>
                    Crear Rol
                </Button>
            </StyledButtonContainer>
            {roles.map((rol) => (
                <StyledCard key={rol.id_rol}>
                    <StyledCardHeader
                        avatar={
                            <Avatar aria-label="rol">
                                {rol.id_rol.charAt(0)}
                            </Avatar>
                        }
                        title={`(ID: ${rol.id_rol})`}
                        subheader={`Descripción: ${rol.descripcion}`}
                    />
                    <StyledCardContent>
                        <StyledButtonContainer>
                            <Button variant="outlined" color="secondary" onClick={() => handleEditarRol(rol.id_rol)}>
                                Editar
                            </Button>
                            <Button variant="outlined" color="error" onClick={() => handleBorrarRol(rol.id_rol)}>
                                Borrar
                            </Button>
                        </StyledButtonContainer>
                    </StyledCardContent>
                </StyledCard>
            ))}
        </RolCardStyled>
    );
}
