"use client"; // Asegúrate de tener este encabezado en la parte superior
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { useGlobalUpdate } from "@/app/context/globalProvider"; // Importa el hook para actualizar el contexto

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

const LoginPage = () => {
    const [nombre_usuario, setNombreUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");
    const router = useRouter();
    const { setToken, setUser } = useGlobalUpdate(); // Obtén las funciones para actualizar el token y el usuario

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombre_usuario, contrasena }),
        });

        const data = await response.json();
        if (response.ok) {
            // Guarda el token y el usuario en el contexto
            console.log("Login exitoso:", data);
            setToken(data.token); // Almacena el token en el contexto
            setUser(data.usuario); // Almacena el usuario en el contexto
            router.push('/'); // Redirige a la página principal o donde necesites
        } else {
            // Manejar error
            console.error(data.error);
            alert(data.error); // O alguna notificación para el usuario
        }
    };

    return (
        <FormContainer>
            <StyledCard>
                <StyledCardHeader
                    avatar={<Avatar aria-label="login">L</Avatar>}
                    title="Iniciar Sesión"
                />
                <StyledCardContent>
                    <Typography variant="body2" color="textSecondary">
                        Completa los campos para iniciar sesión en tu cuenta.
                    </Typography>
                    <form onSubmit={handleLogin}>
                        <StyledInput
                            type="text"
                            placeholder="Nombre de Usuario"
                            value={nombre_usuario}
                            onChange={(e) => setNombreUsuario(e.target.value)}
                            required
                        />
                        <StyledInput
                            type="password"
                            placeholder="Contraseña"
                            value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)}
                            required
                        />
                        <StyledButton variant="contained" color="primary" fullWidth type="submit">
                            Iniciar Sesión
                        </StyledButton>
                    </form>
                </StyledCardContent>
            </StyledCard>
        </FormContainer>
    );
};

export default LoginPage;
