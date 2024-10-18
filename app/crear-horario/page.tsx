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

export default function CrearHorario() {
    const [horario, setHorario] = useState({
        id_empleado: '',
        fecha: '',
        hora_entrada: '',
        hora_salida: '',
        estatus: 'activo', // Valor predeterminado
    });
    const [empleados, setEmpleados] = useState<{ id_empleado: string; nombre: string }[]>([]);
    const router = useRouter();

    // Cargar empleados al iniciar
    useEffect(() => {
        const fetchEmpleados = async () => {
            const response = await fetch('/api/empleados');
            const data = await response.json();
            setEmpleados(data);
        };

        fetchEmpleados();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setHorario({
            ...horario,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Enviar los datos del horario a la API
        const response = await fetch('/api/horarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...horario,
            }),
        });

        if (response.ok) {
            router.push('/horario'); // Redirigir después de crear el horario
        } else {
            // Manejar errores según sea necesario
            console.error('Error al crear horario:', await response.json());
        }
    };

    return (
        <FormContainer>
            <StyledCard>
                <StyledCardHeader
                    avatar={<Avatar aria-label="horario">H</Avatar>}
                    title="Crear Horario"
                />
                <StyledCardContent>
                    <Typography variant="body2" color="textSecondary">
                        Completa los campos para crear un nuevo horario.
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <StyledSelect
                            name="id_empleado"
                            value={horario.id_empleado}
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
                        <StyledInput
                            type="date"
                            name="fecha"
                            value={horario.fecha}
                            onChange={handleChange}
                            required
                        />
                        <StyledInput
                            type="time"
                            name="hora_entrada"
                            value={horario.hora_entrada}
                            onChange={handleChange}
                            required
                        />
                        <StyledInput
                            type="time"
                            name="hora_salida"
                            value={horario.hora_salida}
                            onChange={handleChange}
                            required
                        />
                        <StyledSelect
                            name="estatus"
                            value={horario.estatus}
                            onChange={handleChange}
                            required
                        >
                            <option value="activo">Activo</option>
                            <option value="inactivo">Inactivo</option>
                        </StyledSelect>
                        <StyledButton variant="contained" color="primary" fullWidth type="submit">
                            Crear Horario
                        </StyledButton>
                    </form>
                </StyledCardContent>
            </StyledCard>
        </FormContainer>
    );
}
