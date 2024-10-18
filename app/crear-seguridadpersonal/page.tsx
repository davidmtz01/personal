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

export default function CrearSeguridadPersonal() {
    const [seguridadPersonal, setSeguridadPersonal] = useState({
        id_usuario: '',
        usuario: '',
        contrasena: '',
        id_empleado: '',
        id_rol: '',
        estatus: 'activo',
    });
    const [empleados, setEmpleados] = useState<{ id_empleado: string; nombre: string }[]>([]);
    const [roles, setRoles] = useState<{ id_rol: string; descripcion: string }[]>([]);
    const router = useRouter();

    // Cargar empleados y roles al iniciar
    useEffect(() => {
        const fetchData = async () => {
            const responseEmpleados = await fetch('/api/empleados');
            const dataEmpleados = await responseEmpleados.json();
            setEmpleados(dataEmpleados);

            const responseRoles = await fetch('/api/rols');
            const dataRoles = await responseRoles.json();
            setRoles(dataRoles);
        };

        fetchData();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setSeguridadPersonal({
            ...seguridadPersonal,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Enviar los datos de seguridad personal a la API
        const response = await fetch('/api/seguridadpersonals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(seguridadPersonal),
        });

        if (response.ok) {
            router.push('/seguridadpersonal');
        } else {
            console.error('Error al crear registro de seguridad personal:', await response.json());
        }
    };

    return (
        <FormContainer>
            <StyledCard>
                <StyledCardHeader
                    avatar={<Avatar aria-label="seguridad-personal">SP</Avatar>}
                    title="Crear Seguridad Personal"
                />
                <StyledCardContent>
                    <Typography variant="body2" color="textSecondary">
                        Completa los campos para crear un nuevo registro de seguridad personal.
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <StyledInput
                            type="text"
                            name="usuario"
                            placeholder="Usuario"
                            value={seguridadPersonal.usuario}
                            onChange={handleChange}
                            required
                        />
                        <StyledInput
                            type="password"
                            name="contrasena"
                            placeholder="Contraseña"
                            value={seguridadPersonal.contrasena}
                            onChange={handleChange}
                            required
                        />
                        <StyledSelect
                            name="id_empleado"
                            value={seguridadPersonal.id_empleado}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Selecciona un Empleado</option>
                            {empleados.map((empleado) => (
                                <option key={empleado.id_empleado} value={empleado.id_empleado}>
                                    {empleado.nombre} (ID: {empleado.id_empleado})
                                </option>
                            ))}
                        </StyledSelect>
                        <StyledSelect
                            name="id_rol"
                            value={seguridadPersonal.id_rol}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Selecciona un Rol</option>
                            {roles.map((rol) => (
                                <option key={rol.id_rol} value={rol.id_rol}>
                                    {rol.descripcion} (ID: {rol.id_rol})
                                </option>
                            ))}
                        </StyledSelect>
                        <StyledSelect
                            name="estatus"
                            value={seguridadPersonal.estatus}
                            onChange={handleChange}
                            required
                        >
                            <option value="activo">Activo</option>
                            <option value="inactivo">Inactivo</option>
                        </StyledSelect>
                        <StyledButton variant="contained" color="primary" fullWidth type="submit">
                            Crear Seguridad Personal
                        </StyledButton>
                    </form>
                </StyledCardContent>
            </StyledCard>
        </FormContainer>
    );
}
