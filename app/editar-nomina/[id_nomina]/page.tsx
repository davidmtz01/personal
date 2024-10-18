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

// Definir interfaces para los tipos de datos
interface Nomina {
    id_nomina: string;
    id_empleado: string;
    periodo: string; // Este campo ahora será una fecha en formato de cadena
    salario: string;
    estatus: string;
    id_rol: string;
}

interface Empleado {
    id_empleado: string;
    nombre: string; // Cambia esto al campo correcto que uses
}

interface Rol {
    id_rol: string;
    descripcion: string;
}

export default function EditarNomina() {
    const [nomina, setNomina] = useState<Nomina>({
        id_nomina: '',
        id_empleado: '',
        periodo: '',
        salario: '',
        estatus: 'Activo',
        id_rol: ''
    });
    const [roles, setRoles] = useState<Rol[]>([]);
    const [empleados, setEmpleados] = useState<Empleado[]>([]); // Estado para empleados
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const { id_nomina } = useParams();

    useEffect(() => {
        const fetchNomina = async () => {
            try {
                const response = await fetch(`/api/nominas?id_nomina=${id_nomina}`);
                if (!response.ok) {
                    throw new Error('Error al obtener la nómina');
                }
                const data = await response.json();
                setNomina(data);
            } catch (error) {
                setError((error as Error).message);
            }
        };

        const fetchRoles = async () => {
            try {
                const response = await fetch(`/api/rols`);
                if (!response.ok) {
                    throw new Error('Error al obtener los roles');
                }
                const data = await response.json();
                setRoles(data);
            } catch (error) {
                setError((error as Error).message);
            }
        };

        const fetchEmpleados = async () => { // Nueva función para obtener empleados
            try {
                const response = await fetch(`/api/empleados`); // Ajusta la URL según tu API
                if (!response.ok) {
                    throw new Error('Error al obtener los empleados');
                }
                const data = await response.json();
                setEmpleados(data); // Establecer los empleados obtenidos
            } catch (error) {
                setError((error as Error).message);
            }
        };

        fetchNomina();
        fetchRoles();
        fetchEmpleados(); // Llamar a la función para obtener empleados
    }, [id_nomina]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setNomina({
            ...nomina,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/nominas`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(nomina)
            });

            if (!response.ok) {
                throw new Error('Error al actualizar la nómina');
            }

            // Vaciar el campo de periodo después de la actualización
            setNomina((prev) => ({
                ...prev,
                periodo: '' // Vacía el campo de periodo
            }));

            router.push('/nomina');
        } catch (error) {
            setError((error as Error).message);
        }
    };

    return (
        <FormContainer>
            <StyledCard>
                <StyledCardHeader
                    avatar={<Avatar aria-label="nomina">{nomina.id_nomina.charAt(0)}</Avatar>}
                    title="Editar Nómina"
                    subheader={`ID: ${nomina.id_nomina}`}
                />
                <StyledCardContent>
                    <Typography variant="body2" color="textSecondary">
                        Edita los campos para actualizar los datos de la nómina.
                    </Typography>
                    {error && <Typography color="error">{error}</Typography>}
                    <form onSubmit={handleSubmit}>
                        <StyledSelect
                            name="id_empleado" // Campo para seleccionar el empleado
                            value={nomina.id_empleado}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Selecciona un empleado</option>
                            {empleados.map((empleado) => (
                                <option key={empleado.id_empleado} value={empleado.id_empleado}>
                                    {empleado.nombre} {/* Cambia esto al campo correcto para mostrar el nombre */}
                                </option>
                            ))}
                        </StyledSelect>

                        {/* Campo de periodo como input de tipo date */}
                        <StyledInput
                            type="date" // Cambia el tipo a 'date'
                            name="periodo"
                            value={nomina.periodo}
                            onChange={handleChange}
                            required
                        />
                        <StyledInput
                            type="number"
                            name="salario"
                            placeholder="Salario"
                            value={nomina.salario}
                            onChange={handleChange}
                            required
                        />

                        <StyledSelect
                            name="estatus"
                            value={nomina.estatus}
                            onChange={handleChange}
                        >
                            <option value="Activo">Activo</option>
                            <option value="Inactivo">Inactivo</option>
                        </StyledSelect>

                        <StyledButton variant="contained" color="primary" fullWidth type="submit">
                            Actualizar Nómina
                        </StyledButton>
                    </form>
                </StyledCardContent>
            </StyledCard>
        </FormContainer>
    );
}

