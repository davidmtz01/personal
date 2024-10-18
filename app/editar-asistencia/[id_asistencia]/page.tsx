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

export default function EditarAsistencia() {
    const [asistencia, setAsistencia] = useState({
        id_asistencia: '',
        id_empleado: '',
        fecha_ingreso: '',
        hora_entrada: '',
        hora_salida: '',
        estatus: 'Activo', // Valor por defecto
    });
    const [empleados, setEmpleados] = useState<{ id_empleado: string; nombre: string }[]>([]);
    const [error, setError] = useState<string | null>(null); // Estado para manejo de errores
    const router = useRouter();
    const { id_asistencia } = useParams(); // Obtener el ID del parámetro de la ruta

    useEffect(() => {
        // Obtener los datos de la asistencia a editar
        const fetchAsistencia = async () => {
            try {
                const response = await fetch(`/api/asistencias?id_asistencia=${id_asistencia}`);
                if (!response.ok) {
                    throw new Error('Error al obtener la asistencia');
                }
                const data = await response.json();
                setAsistencia(data); // Establecer la asistencia obtenida
            } catch (error) {
                setError((error as Error).message); // Establecer el mensaje de error
            }
        };

        // Cargar empleados al iniciar
        const fetchEmpleados = async () => {
            const response = await fetch('/api/empleados');
            const data = await response.json();
            setEmpleados(data);
        };

        fetchAsistencia();
        fetchEmpleados();
    }, [id_asistencia]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setAsistencia({
            ...asistencia,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Actualizar los datos de asistencia
            const response = await fetch(`/api/asistencias`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(asistencia)
            });

            if (!response.ok) {
                throw new Error('Error al actualizar la asistencia');
            }

            router.push('/asistencia'); // Redirigir después de actualizar
        } catch (error) {
            setError((error as Error).message);
        }
    };

    return (
        <FormContainer>
            <StyledCard>
                <StyledCardHeader
                    avatar={<Avatar aria-label="asistencia">{asistencia.id_asistencia.charAt(0)}</Avatar>}
                    title="Editar Asistencia"
                    subheader={`ID: ${asistencia.id_asistencia}`}
                />
                <StyledCardContent>
                    <Typography variant="body2" color="textSecondary">
                        Edita los campos para actualizar los datos de asistencia.
                    </Typography>
                    {error && <Typography color="error">{error}</Typography>}
                    <form onSubmit={handleSubmit}>
                        <StyledSelect
                            name="id_empleado"
                            value={asistencia.id_empleado}
                            onChange={handleChange}
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
                            name="fecha_ingreso"
                            placeholder="Fecha Ingreso"
                            value={asistencia.fecha_ingreso}
                            onChange={handleChange}
                        />
                        <StyledInput
                            type="time"
                            name="hora_entrada"
                            placeholder="Hora Entrada"
                            value={asistencia.hora_entrada}
                            onChange={handleChange}
                        />
                        <StyledInput
                            type="time"
                            name="hora_salida"
                            placeholder="Hora Salida"
                            value={asistencia.hora_salida}
                            onChange={handleChange}
                        />
                        <StyledSelect
                            name="estatus"
                            value={asistencia.estatus}
                            onChange={handleChange}
                        >
                            <option value="Activo">Activo</option>
                            <option value="Inactivo">Inactivo</option>
                        </StyledSelect>

                        <StyledButton variant="contained" color="primary" fullWidth type="submit">
                            Actualizar Asistencia
                        </StyledButton>
                    </form>
                </StyledCardContent>
            </StyledCard>
        </FormContainer>
    );
}
