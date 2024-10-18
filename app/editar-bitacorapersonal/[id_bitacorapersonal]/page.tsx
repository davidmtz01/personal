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

// Definición de tipos para empleados
interface Empleado {
    id_empleado: number;
    nombre: string;
}

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

export default function EditarBitacoraPersonal() {
    const [bitacoraPersonal, setBitacoraPersonal] = useState({
        id_bitacora: '',
        id_empleado: '',
        accion: '',
        fecha: '',
    });
    const [empleados, setEmpleados] = useState<Empleado[]>([]);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const { id_bitacorapersonal } = useParams(); // Obtener el ID de la ruta

    // Obtener datos de empleados
    useEffect(() => {
        const fetchEmpleados = async () => {
            try {
                const response = await fetch('/api/empleados');
                if (!response.ok) {
                    throw new Error('Error al obtener empleados');
                }
                const empleadosData: Empleado[] = await response.json();
                setEmpleados(empleadosData);
            } catch (error) {
                setError((error as Error).message);
            }
        };

        fetchEmpleados();
    }, []);

    // Obtener los datos de bitacora_personal a editar
    useEffect(() => {
        const fetchBitacoraPersonal = async () => {
            try {
                const response = await fetch(`/api/bitacorapersonals?id_bitacora=${id_bitacorapersonal}`);
                if (!response.ok) {
                    throw new Error('Error al obtener el registro de bitácora personal');
                }
                const data = await response.json();
                setBitacoraPersonal(data);
            } catch (error) {
                setError((error as Error).message);
            }
        };

        fetchBitacoraPersonal();
    }, [id_bitacorapersonal]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setBitacoraPersonal({
            ...bitacoraPersonal,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/bitacorapersonals`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bitacoraPersonal),
            });

            if (!response.ok) {
                throw new Error('Error al actualizar la bitácora personal');
            }

            router.push('/bitacorapersonal'); // Redirigir después de la actualización
        } catch (error) {
            setError((error as Error).message);
        }
    };

    return (
        <FormContainer>
            <StyledCard>
                <StyledCardHeader
                    avatar={<Avatar aria-label="bitacorapersonal">{bitacoraPersonal.accion.charAt(0)}</Avatar>}
                    title="Editar Bitácora Personal"
                    subheader={`ID: ${bitacoraPersonal.id_bitacora}`}
                />
                <StyledCardContent>
                    <Typography variant="body2" color="textSecondary">
                        Edita los campos para actualizar los datos de la bitácora personal.
                    </Typography>
                    {error && <Typography color="error">{error}</Typography>}
                    <form onSubmit={handleSubmit}>
                        <StyledSelect
                            name="id_empleado"
                            value={bitacoraPersonal.id_empleado}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Selecciona un empleado</option>
                            {empleados.map((empleado) => (
                                <option key={empleado.id_empleado} value={empleado.id_empleado}>
                                    {empleado.nombre}
                                </option>
                            ))}
                        </StyledSelect>

                        <StyledInput
                            type="text"
                            name="accion"
                            placeholder="Acción"
                            value={bitacoraPersonal.accion}
                            onChange={handleChange}
                            required
                        />

                        <StyledInput
                            type="date"
                            name="fecha"
                            value={bitacoraPersonal.fecha}
                            onChange={handleChange}
                            required
                        />

                        <StyledButton variant="contained" color="primary" fullWidth type="submit">
                            Actualizar Bitácora Personal
                        </StyledButton>
                    </form>
                </StyledCardContent>
            </StyledCard>
        </FormContainer>
    );
}
