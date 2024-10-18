"use client";
import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { useRouter, useParams } from 'next/navigation';

// Definición de tipos para usuarios
interface Usuario {
    id_usuario: string;
    nombre_usuario: string;
}

// Contenedor estilizado para el formulario
const FormContainer = styled('div')`
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

const StyledButton = styled(Button)`
    margin-top: 16px;
`;

const StyledInput = styled('input')`
    width: 100%;
    padding: 12px;
    margin-bottom: 16px;
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid #fff;
    color: #fff;
    border-radius: 4px;
    font-size: 16px;

    &::placeholder {
        color: #bbb;
    }
`;

const StyledSelect = styled('select')`
    width: 100%;
    padding: 12px;
    margin-bottom: 16px;
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid #fff;
    color: #fff;
    border-radius: 4px;
    font-size: 16px;
`;

export default function EditarBitacoraSeguridad() {
    const [bitacoraSeguridad, setBitacoraSeguridad] = useState({
        id_bitacora: '',
        id_usuario: '',
        accion: '',
        fecha: '',
    });
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const { id_bitacoraseguridad } = useParams(); // Obtener el ID de la ruta

    // Obtener datos de usuarios
    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await fetch('/api/usuarios');
                if (!response.ok) {
                    throw new Error('Error al obtener usuarios');
                }
                const usuariosData: Usuario[] = await response.json();
                setUsuarios(usuariosData);
            } catch (error) {
                setError((error as Error).message);
            }
        };

        fetchUsuarios();
    }, []);

    // Obtener los datos de bitacora_seguridad a editar
    useEffect(() => {
        const fetchBitacoraSeguridad = async () => {
            try {
                const response = await fetch(`/api/bitacoraseguridads?id_bitacora=${id_bitacoraseguridad}`);
                if (!response.ok) {
                    throw new Error('Error al obtener el registro de bitácora de seguridad');
                }
                const data = await response.json();
                setBitacoraSeguridad(data);
            } catch (error) {
                setError((error as Error).message);
            }
        };

        fetchBitacoraSeguridad();
    }, [id_bitacoraseguridad]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setBitacoraSeguridad({
            ...bitacoraSeguridad,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/bitacoraseguridads`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bitacoraSeguridad),
            });

            if (!response.ok) {
                throw new Error('Error al actualizar la bitácora de seguridad');
            }

            router.push('/bitacoraseguridad'); // Redirigir después de la actualización
        } catch (error) {
            setError((error as Error).message);
        }
    };

    return (
        <FormContainer>
            <StyledCard>
                <StyledCardHeader
                    avatar={<Avatar aria-label="bitacoraSeguridad">{bitacoraSeguridad.accion.charAt(0)}</Avatar>}
                    title="Editar Bitácora de Seguridad"
                    subheader={`ID: ${bitacoraSeguridad.id_bitacora}`}
                />
                <StyledCardContent>
                    <Typography variant="body2" color="textSecondary">
                        Edita los campos para actualizar los datos de la bitácora de seguridad.
                    </Typography>
                    {error && <Typography color="error">{error}</Typography>}
                    <form onSubmit={handleSubmit}>
                        <StyledSelect
                            name="id_usuario"
                            value={bitacoraSeguridad.id_usuario}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Selecciona un usuario</option>
                            {usuarios.map((usuario) => (
                                <option key={usuario.id_usuario} value={usuario.id_usuario}>
                                    {usuario.nombre_usuario}
                                </option>
                            ))}
                        </StyledSelect>

                        <StyledInput
                            type="text"
                            name="accion"
                            placeholder="Acción"
                            value={bitacoraSeguridad.accion}
                            onChange={handleChange}
                            required
                        />

                        <StyledInput
                            type="date"
                            name="fecha"
                            value={bitacoraSeguridad.fecha}
                            onChange={handleChange}
                            required
                        />

                        <StyledButton variant="contained" color="primary" fullWidth type="submit">
                            Actualizar Bitácora de Seguridad
                        </StyledButton>
                    </form>
                </StyledCardContent>
            </StyledCard>
        </FormContainer>
    );
}
