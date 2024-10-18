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

export default function EditarRol() {
    const [rol, setRol] = useState({
        id_rol: '',
        descripcion: '',
    });
    const [error, setError] = useState<string | null>(null); // Estado para manejo de errores
    const router = useRouter();
    const { id_rol } = useParams(); // Obtener el ID del parámetro de la ruta

    useEffect(() => {
        // Obtener los datos del rol a editar
        const fetchRol = async () => {
            try {
                const response = await fetch(`/api/rols?id_rol=${id_rol}`);
                if (!response.ok) {
                    throw new Error('Error al obtener el rol');
                }
                const data = await response.json();
                setRol(data); // Establecer el rol obtenido
            } catch (error) {
                setError((error as Error).message); // Establecer el mensaje de error
            }
        };

        fetchRol();
    }, [id_rol]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRol({
            ...rol,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Actualizar los datos del rol
            const response = await fetch(`/api/rols`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(rol)
            });

            if (!response.ok) {
                throw new Error('Error al actualizar el rol');
            }

            router.push('/rol'); // Redirigir después de actualizar
        } catch (error) {
            setError((error as Error).message);
        }
    };

    return (
        <FormContainer>
            <StyledCard>
                <StyledCardHeader
                    avatar={<Avatar aria-label="rol">{rol.descripcion.charAt(0)}</Avatar>}
                    title="Editar Rol"
                    subheader={`ID: ${rol.id_rol}`}
                />
                <StyledCardContent>
                    <Typography variant="body2" color="textSecondary">
                        Edita los campos para actualizar los datos del rol.
                    </Typography>
                    {error && <Typography color="error">{error}</Typography>}
                    <form onSubmit={handleSubmit}>
                        <StyledInput
                            type="text"
                            name="descripcion"
                            placeholder="Descripción"
                            value={rol.descripcion}
                            onChange={handleChange}
                            required
                        />
                        <StyledButton variant="contained" color="primary" fullWidth type="submit">
                            Actualizar Rol
                        </StyledButton>
                    </form>
                </StyledCardContent>
            </StyledCard>
        </FormContainer>
    );
}
