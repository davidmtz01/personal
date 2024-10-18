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

export default function EditarHorario() {
    const [horario, setHorario] = useState({
        id_horario: '',
        id_empleado: '',
        fecha: '',
        hora_entrada: '',
        hora_salida: '',
        estatus: 'activo' // Valor por defecto
    });
    const [error, setError] = useState<string | null>(null); // Estado para manejo de errores
    const router = useRouter();
    const { id_horario } = useParams(); // Obtener el ID del parámetro de la ruta

    useEffect(() => {
        // Obtener los datos del horario a editar
        const fetchHorario = async () => {
            try {
                const response = await fetch(`/api/horarios?id_horario=${id_horario}`);
                if (!response.ok) {
                    throw new Error('Error al obtener el horario');
                }
                const data = await response.json();
                setHorario(data); // Establecer el horario obtenido
            } catch (error) {
                setError((error as Error).message); // Establecer el mensaje de error
            }
        };

        fetchHorario();
    }, [id_horario]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setHorario({
            ...horario,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Actualizar los datos del horario
            const response = await fetch(`/api/horarios`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(horario)
            });

            if (!response.ok) {
                throw new Error('Error al actualizar el horario');
            }

            router.push('/horario'); // Redirigir después de actualizar
        } catch (error) {
            setError((error as Error).message);
        }
    };

    return (
        <FormContainer>
            <StyledCard>
                <StyledCardHeader
                    avatar={<Avatar aria-label="horario">{horario.id_horario.charAt(0)}</Avatar>}
                    title="Editar Horario"
                    subheader={`ID: ${horario.id_horario}`}
                />
                <StyledCardContent>
                    <Typography variant="body2" color="textSecondary">
                        Edita los campos para actualizar los datos del horario.
                    </Typography>
                    {error && <Typography color="error">{error}</Typography>}
                    <form onSubmit={handleSubmit}>
                        <StyledInput
                            type="date"
                            name="fecha"
                            placeholder="Fecha"
                            value={horario.fecha}
                            onChange={handleChange}
                            required
                        />
                        <StyledInput
                            type="time"
                            name="hora_entrada"
                            placeholder="Hora de entrada"
                            value={horario.hora_entrada}
                            onChange={handleChange}
                            required
                        />
                        <StyledInput
                            type="time"
                            name="hora_salida"
                            placeholder="Hora de salida"
                            value={horario.hora_salida}
                            onChange={handleChange}
                            required
                        />
                        <StyledSelect
                            name="estatus"
                            value={horario.estatus}
                            onChange={handleChange}
                        >
                            <option value="activo">Activo</option>
                            <option value="inactivo">Inactivo</option>
                        </StyledSelect>

                        <StyledButton variant="contained" color="primary" fullWidth type="submit">
                            Actualizar Horario
                        </StyledButton>
                    </form>
                </StyledCardContent>
            </StyledCard>
        </FormContainer>
    );
}
