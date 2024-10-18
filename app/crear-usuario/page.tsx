"use client";
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

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

export default function CrearUsuario() {
    const [usuario, setUsuario] = useState({
        nombre_usuario: '',
        contrasena: '',
        id_rol: '',
        estatus: ''
    });

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Enviar los datos del usuario a la API
        const response = await fetch('/api/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        });

        if (response.ok) {
            router.push('/'); // Redirigir después de crear el usuario
        } else {
            // Manejar errores según sea necesario
            console.error('Error al crear usuario:', await response.json());
        }
    };

    return (
        <FormContainer>
            <StyledCard>
                <StyledCardHeader
                    avatar={<Avatar aria-label="usuario">{usuario.nombre_usuario.charAt(0)}</Avatar>}
                    title="Crear Usuario"
                />
                <StyledCardContent>
                    <Typography variant="body2" color="textSecondary">
                        Completa los campos para crear un nuevo usuario.
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        {/* Campo ID Usuario eliminado */}
                        <StyledInput
                            type="text"
                            name="nombre_usuario"
                            placeholder="Nombre Usuario"
                            value={usuario.nombre_usuario}
                            onChange={handleChange}
                        />
                        <StyledInput
                            type="password"
                            name="contrasena"
                            placeholder="Contraseña"
                            value={usuario.contrasena}
                            onChange={handleChange}
                        />
                        <StyledInput
                            type="text"
                            name="id_rol"
                            placeholder="ID Rol"
                            value={usuario.id_rol}
                            onChange={handleChange}
                        />
                        <StyledInput
                            type="text"
                            name="estatus"
                            placeholder="Estatus"
                            value={usuario.estatus}
                            onChange={handleChange}
                        />
                        <StyledButton variant="contained" color="primary" fullWidth type="submit">
                            Crear Usuario
                        </StyledButton>
                    </form>
                </StyledCardContent>
            </StyledCard>
        </FormContainer>
    );
}
