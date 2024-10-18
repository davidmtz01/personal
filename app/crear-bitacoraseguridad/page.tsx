"use client";
import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

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

export default function CrearBitacoraSeguridad() {
    const [bitacora, setBitacora] = useState({
        id_usuario: '',
        fecha: '',
        accion: '',
        estatus: 'activo',
    });
    const [usuarios, setUsuarios] = useState<{ id_usuario: string; nombre_usuario: string }[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchUsuarios = async () => {
            const response = await fetch('/api/usuarios');
            const data = await response.json();
            setUsuarios(data);
        };

        fetchUsuarios();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setBitacora({
            ...bitacora,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch('/api/bitacoraseguridads', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bitacora),
        });

        if (response.ok) {
            router.push('/bitacoraseguridad');
        } else {
            console.error('Error al crear bitácora:', await response.json());
        }
    };

    return (
        <FormContainer>
            <StyledCard>
                <StyledCardHeader
                    avatar={<Avatar aria-label="bitacora">B</Avatar>}
                    title="Crear Bitácora de Seguridad"
                />
                <StyledCardContent>
                    <Typography variant="body2" color="textSecondary">
                        Completa los campos para crear una nueva bitácora de seguridad.
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <StyledSelect
                            name="id_usuario"
                            value={bitacora.id_usuario}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Selecciona un Usuario</option>
                            {usuarios.map((usuario) => (
                                <option key={usuario.id_usuario} value={usuario.id_usuario}>
                                    {usuario.nombre_usuario} (ID: {usuario.id_usuario})
                                </option>
                            ))}
                        </StyledSelect>
                        <StyledInput
                            type="date"
                            name="fecha"
                            value={bitacora.fecha}
                            onChange={handleChange}
                            required
                        />
                        <StyledInput
                            type="text" 
                            name="accion"
                            placeholder="Acción"
                            value={bitacora.accion}
                            onChange={handleChange}
                            required
                        />
                        <StyledSelect
                            name="estatus"
                            value={bitacora.estatus}
                            onChange={handleChange}
                            required
                        >
                            <option value="activo">Activo</option>
                            <option value="inactivo">Inactivo</option>
                        </StyledSelect>
                        <StyledButton variant="contained" color="primary" fullWidth type="submit">
                            Crear Bitácora
                        </StyledButton>
                    </form>
                </StyledCardContent>
            </StyledCard>
        </FormContainer>
    );
}
