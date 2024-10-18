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

export default function CrearEvaluacion() {
    const [evaluacion, setEvaluacion] = useState({
        id_empleado: '',
        fecha: '',
        puntuacion: 0,
        comentarios: '',
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
        setEvaluacion({
            ...evaluacion,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Enviar los datos de la evaluación a la API
        const response = await fetch('/api/evaluaciones', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...evaluacion,
                puntuacion: evaluacion.puntuacion, // Asegúrate de que esto coincida con lo que esperas en el servidor
            }),
        });

        if (response.ok) {
            router.push('/evaluacion'); // Redirigir después de crear la evaluación
        } else {
            // Manejar errores según sea necesario
            console.error('Error al crear evaluación:', await response.json());
        }
    };

    return (
        <FormContainer>
            <StyledCard>
                <StyledCardHeader
                    avatar={<Avatar aria-label="evaluacion">E</Avatar>}
                    title="Crear Evaluación"
                />
                <StyledCardContent>
                    <Typography variant="body2" color="textSecondary">
                        Completa los campos para crear una nueva evaluación.
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <StyledSelect
                            name="id_empleado"
                            value={evaluacion.id_empleado}
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
                            value={evaluacion.fecha}
                            onChange={handleChange}
                            required
                        />
                        <StyledInput
                            type="number"
                            name="puntuacion" // Asegúrate de que este nombre coincida con lo que espera la API
                            placeholder="Puntaje (máx. 10)"
                            value={evaluacion.puntuacion}
                            onChange={handleChange}
                            required
                            min="0"
                            max="10"
                        />
                        <StyledInput
                            type="text"
                            name="comentarios"
                            placeholder="Comentarios"
                            value={evaluacion.comentarios}
                            onChange={handleChange}
                        />
                        <StyledSelect
                            name="estatus"
                            value={evaluacion.estatus}
                            onChange={handleChange}
                            required
                        >
                            <option value="activo">Activo</option>
                            <option value="inactivo">Inactivo</option>
                        </StyledSelect>
                        <StyledButton variant="contained" color="primary" fullWidth type="submit">
                            Crear Evaluación
                        </StyledButton>
                    </form>
                </StyledCardContent>
            </StyledCard>
        </FormContainer>
    );
}
