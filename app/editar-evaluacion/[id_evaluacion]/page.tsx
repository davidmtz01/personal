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

export default function EditarEvaluacion() {
    const [evaluacion, setEvaluacion] = useState({
        id_evaluacion: '',
        id_empleado: '',
        fecha: '',
        puntuacion: '',
        comentarios: '',
        estatus: 'Activo' // Valor por defecto
    });
    const [error, setError] = useState<string | null>(null); // Estado para manejo de errores
    const router = useRouter();
    const { id_evaluacion } = useParams(); // Obtener el ID del parámetro de la ruta

    useEffect(() => {
        // Obtener los datos de la evaluación a editar
        const fetchEvaluacion = async () => {
            try {
                const response = await fetch(`/api/evaluaciones?id_evaluacion=${id_evaluacion}`);
                if (!response.ok) {
                    throw new Error('Error al obtener la evaluación');
                }
                const data = await response.json();
                setEvaluacion(data); // Establecer la evaluación obtenida
            } catch (error) {
                setError((error as Error).message); // Establecer el mensaje de error
            }
        };

        fetchEvaluacion();
    }, [id_evaluacion]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setEvaluacion({
            ...evaluacion,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Actualizar los datos de la evaluación
            const response = await fetch(`/api/evaluaciones`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(evaluacion)
            });

            if (!response.ok) {
                throw new Error('Error al actualizar la evaluación');
            }

            router.push('/evaluacion'); // Redirigir después de actualizar
        } catch (error) {
            setError((error as Error).message);
        }
    };

    return (
        <FormContainer>
            <StyledCard>
                <StyledCardHeader
                    avatar={<Avatar aria-label="evaluacion">{evaluacion.id_evaluacion.charAt(0)}</Avatar>}
                    title="Editar Evaluación"
                    subheader={`ID: ${evaluacion.id_evaluacion}`}
                />
                <StyledCardContent>
                    <Typography variant="body2" color="textSecondary">
                        Edita los campos para actualizar los datos de la evaluación.
                    </Typography>
                    {error && <Typography color="error">{error}</Typography>}
                    <form onSubmit={handleSubmit}>
                        <StyledInput
                            type="date"
                            name="fecha"
                            placeholder="Fecha"
                            value={evaluacion.fecha}
                            onChange={handleChange}
                            required
                        />
                        <StyledInput
                            type="number"
                            name="puntuacion"
                            placeholder="Puntuación"
                            value={evaluacion.puntuacion}
                            onChange={handleChange}
                            required
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
                        >
                            <option value="Activo">Activo</option>
                            <option value="Inactivo">Inactivo</option>
                        </StyledSelect>

                        <StyledButton variant="contained" color="primary" fullWidth type="submit">
                            Actualizar Evaluación
                        </StyledButton>
                    </form>
                </StyledCardContent>
            </StyledCard>
        </FormContainer>
    );
}
