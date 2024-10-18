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

export default function EditarEmpleado() {
    const [empleado, setEmpleado] = useState({
        id_empleado: '',
        nombre: '',
        direccion: '',
        telefono: '',
        correo: '',
        fecha_ingreso: '',
        id_rol: '', // Asegúrate de que este campo esté presente
        estatus: 'Activo' // Valor por defecto
    });
    const [roles, setRoles] = useState<{ id_rol: string; descripcion: string }[]>([]);
    const [error, setError] = useState<string | null>(null); // Estado para manejo de errores
    const router = useRouter();
    const { id_empleado } = useParams(); // Obtener el ID del parámetro de la ruta

    useEffect(() => {
        // Obtener los datos del empleado a editar
        const fetchEmpleado = async () => {
            try {
                const response = await fetch(`/api/empleados?id_empleado=${id_empleado}`);
                if (!response.ok) {
                    throw new Error('Error al obtener el empleado');
                }
                const data = await response.json();
                setEmpleado(data); // Establecer el empleado obtenido
            } catch (error) {
                setError((error as Error).message); // Establecer el mensaje de error
            }
        };

        // Cargar roles al iniciar
        const fetchRoles = async () => {
            const response = await fetch('/api/rols');
            const data = await response.json();
            setRoles(data);
        };

        fetchEmpleado();
        fetchRoles();
    }, [id_empleado]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setEmpleado({
            ...empleado,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Actualizar los datos del empleado
            const response = await fetch(`/api/empleados`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(empleado)
            });

            if (!response.ok) {
                throw new Error('Error al actualizar el empleado');
            }

            router.push('/empleado'); // Redirigir después de actualizar
        } catch (error) {
            setError((error as Error).message);
        }
    };

    return (
        <FormContainer>
            <StyledCard>
                <StyledCardHeader
                    avatar={<Avatar aria-label="empleado">{empleado.nombre.charAt(0)}</Avatar>}
                    title="Editar Empleado"
                    subheader={`ID: ${empleado.id_empleado}`}
                />
                <StyledCardContent>
                    <Typography variant="body2" color="textSecondary">
                        Edita los campos para actualizar los datos del empleado.
                    </Typography>
                    {error && <Typography color="error">{error}</Typography>}
                    <form onSubmit={handleSubmit}>
                        <StyledInput
                            type="text"
                            name="nombre"
                            placeholder="Nombre"
                            value={empleado.nombre}
                            onChange={handleChange}
                            required
                        />
                        <StyledInput
                            type="text"
                            name="direccion"
                            placeholder="Dirección"
                            value={empleado.direccion}
                            onChange={handleChange}
                            required
                        />
                        <StyledInput
                            type="tel"
                            name="telefono"
                            placeholder="Teléfono"
                            value={empleado.telefono}
                            onChange={handleChange}
                            required
                        />
                        <StyledInput
                            type="email"
                            name="correo"
                            placeholder="Correo"
                            value={empleado.correo}
                            onChange={handleChange}
                            required
                        />
                        <StyledInput
                            type="date"
                            name="fecha_ingreso"
                            placeholder="Fecha Ingreso"
                            value={empleado.fecha_ingreso}
                            onChange={handleChange}
                            required
                        />
                        <StyledSelect
                            name="id_rol"
                            value={empleado.id_rol}
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
                            value={empleado.estatus}
                            onChange={handleChange}
                        >
                            <option value="Activo">Activo</option>
                            <option value="Inactivo">Inactivo</option>
                        </StyledSelect>

                        <StyledButton variant="contained" color="primary" fullWidth type="submit">
                            Actualizar Empleado
                        </StyledButton>
                    </form>
                </StyledCardContent>
            </StyledCard>
        </FormContainer>
    );
}
