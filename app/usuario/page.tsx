"use client";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { useGlobalState } from '@/app/context/globalProvider';
import { useRouter } from 'next/navigation';

// Definir la interfaz Usuario
interface Usuario {
    id_usuario: string;
    nombre_usuario: string;
    contrasena: string;
    id_rol: string;
    estatus: string;
}

// Contenedor estilizado
const UsuarioCardStyled = styled('div')`
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

export default function UsuarioCard() {
    const [registros, setRegistros] = React.useState<Usuario[]>([]);
    const router = useRouter();
    const { theme } = useGlobalState(); // Obtener el tema

    React.useEffect(() => {
        const fetchRegistros = async () => {
            const response = await fetch('/api/usuarios');
            const data: Usuario[] = await response.json();
            setRegistros(data);
        };

        fetchRegistros();
    }, []);

    const handleCrearUsuario = () => {
        router.push('/crear-usuario');
    };

    const handleEditarUsuario = (usuario: Usuario) => {
        router.push(`/editar-usuario/${usuario.id_usuario}`);
    };

    const handleBorrarUsuario = async (id_usuario: string) => {
        const response = await fetch(`/api/usuarios`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id_usuario }), // Pasar el id_usuario en el cuerpo de la solicitud
        });

        if (response.ok) {
            setRegistros((prev) => prev.filter((reg) => reg.id_usuario !== id_usuario));
            console.log('Usuario borrado:', id_usuario);
        }
    };

    return (
        <UsuarioCardStyled>
            <h1 style={{ marginBottom: '16px', textAlign: 'center' }}>Gestión de Usuarios</h1>
            <StyledButtonContainer>
                <Button variant="contained" color="primary" onClick={handleCrearUsuario}>
                    Crear Usuario
                </Button>
            </StyledButtonContainer>
            {registros.map((registro) => (
                <StyledCard key={registro.id_usuario}>
                    <StyledCardHeader
                        avatar={
                            <Avatar aria-label="usuario">
                                {registro.nombre_usuario.charAt(0)}
                            </Avatar>
                        }
                        title={registro.nombre_usuario}
                        subheader={`ID: ${registro.id_usuario} - Estatus: ${registro.estatus}`}
                    />
                    <StyledCardContent>
                        <Typography variant="body2">
                            ID Rol: {registro.id_rol}
                        </Typography>
                        <StyledButtonContainer>
                            <Button variant="outlined" color="secondary" onClick={() => handleEditarUsuario(registro)}>
                                Editar
                            </Button>
                            <Button variant="outlined" color="error" onClick={() => handleBorrarUsuario(registro.id_usuario)}>
                                Borrar
                            </Button>
                        </StyledButtonContainer>
                    </StyledCardContent>
                </StyledCard>
            ))}
        </UsuarioCardStyled>
    );
}
