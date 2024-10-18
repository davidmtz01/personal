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

// Definir la interfaz Bitacora
interface Bitacora {
    id_bitacora: string;
    id_usuario: string; // Cambiado a id_usuario según tu tabla
    accion: string;
    fecha: string;
}

// Definir la interfaz Usuario
interface Usuario {
    id_usuario: string;
    nombre_usuario: string;
    direccion: string;
    telefono: string;
    correo: string;
    fecha_ingreso: string;
    id_rol: string;
    estatus: string;
}

// Contenedor estilizado
const BitacoraCardStyled = styled('div')`
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

export default function BitacoraCard() {
    const [bitacoras, setBitacoras] = React.useState<Bitacora[]>([]);
    const [usuarios, setUsuarios] = React.useState<Usuario[]>([]); // Cambiado a usuarios
    const router = useRouter();

    // Cargar bitácoras y usuarios al iniciar
    React.useEffect(() => {
        const fetchData = async () => {
            const responseBitacoras = await fetch('/api/bitacoraseguridads'); // Cambiado a bitacoraseguridads
            const dataBitacoras: Bitacora[] = await responseBitacoras.json();
            setBitacoras(dataBitacoras);

            const responseUsuarios = await fetch('/api/usuarios'); // Cargar usuarios
            const dataUsuarios: Usuario[] = await responseUsuarios.json();
            setUsuarios(dataUsuarios);
        };

        fetchData();
    }, []);

    const handleCrearBitacora = () => {
        router.push('/crear-bitacoraseguridad'); // Redirigir a la página para crear bitácora
    };

    const handleEditarBitacora = (bitacora: Bitacora) => {
        router.push(`/editar-bitacoraseguridad/${bitacora.id_bitacora}`); // Redirigir a la página para editar bitácora
    };

    const handleBorrarBitacora = async (id_bitacora: string) => {
        const response = await fetch(`/api/bitacoraseguridads`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id_bitacora }), // Pasar el id_bitacora en el cuerpo de la solicitud
        });

        if (response.ok) {
            setBitacoras((prev) => prev.filter((bit) => bit.id_bitacora !== id_bitacora));
            console.log('Bitácora borrada:', id_bitacora);
        }
    };

    return (
        <BitacoraCardStyled>
            <h1 style={{ marginBottom: '16px', textAlign: 'center' }}>Gestión de Bitácoras de Seguridad</h1>
            <StyledButtonContainer>
                <Button variant="contained" color="primary" onClick={handleCrearBitacora}>
                    Crear Bitácora
                </Button>
            </StyledButtonContainer>
            {bitacoras.map((bitacora) => {
                // Buscar el usuario correspondiente
                const usuario = usuarios.find(usr => usr.id_usuario === bitacora.id_usuario);
                const nombre_usuario = usuario ? usuario.nombre_usuario : 'Desconocido'; // Manejar si no se encuentra

                return (
                    <StyledCard key={bitacora.id_bitacora}>
                        <StyledCardHeader
                            avatar={
                                <Avatar aria-label="bitacora">
                                    {nombre_usuario ? nombre_usuario.charAt(0) : '?'} {/* Muestra '?' si no se encuentra el usuario */}
                                </Avatar>
                            }
                            title={`Bitácora ID: ${bitacora.id_bitacora}`}
                            subheader={`Usuario ID: ${bitacora.id_usuario} - Nombre: ${nombre_usuario} - Acción: ${bitacora.accion} - Fecha: ${bitacora.fecha}`}
                        />
                        <StyledCardContent>
                            <Typography variant="body2">
                                Acción: {bitacora.accion}
                            </Typography>
                            <StyledButtonContainer>
                                <Button variant="outlined" color="secondary" onClick={() => handleEditarBitacora(bitacora)}>
                                    Editar
                                </Button>
                                <Button variant="outlined" color="error" onClick={() => handleBorrarBitacora(bitacora.id_bitacora)}>
                                    Borrar
                                </Button>
                            </StyledButtonContainer>
                        </StyledCardContent>
                    </StyledCard>
                );
            })}
        </BitacoraCardStyled>
    );
}
