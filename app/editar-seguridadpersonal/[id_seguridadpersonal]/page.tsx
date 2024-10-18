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

// Definición de tipos para empleados y roles
interface Empleado {
    id_empleado: number;
    nombre: string;
}

interface Rol {
    id_rol: number;
    descripcion: string;
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

export default function EditarSeguridadPersonal() {
    const [seguridadPersonal, setSeguridadPersonal] = useState({
        id_usuario: '',
        usuario: '',
        contrasena: '',
        estatus: 'activo', // Valor por defecto
        id_empleado: '',
        id_rol: '',
    });
    const [empleados, setEmpleados] = useState<Empleado[]>([]);  // Tipo definido para empleados
    const [roles, setRoles] = useState<Rol[]>([]);               // Tipo definido para roles
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const { id_seguridadpersonal } = useParams(); // Obtener el ID de la ruta

    // Obtener datos de empleados y roles
    useEffect(() => {
        const fetchEmpleadosYRoles = async () => {
            try {
                const [empleadosRes, rolesRes] = await Promise.all([
                    fetch('/api/empleados'),
                    fetch('/api/rols'),
                ]);

                if (!empleadosRes.ok || !rolesRes.ok) {
                    throw new Error('Error al obtener empleados o roles');
                }

                const empleadosData: Empleado[] = await empleadosRes.json();
                const rolesData: Rol[] = await rolesRes.json();

                setEmpleados(empleadosData);
                setRoles(rolesData);
            } catch (error) {
                setError((error as Error).message);
            }
        };

        fetchEmpleadosYRoles();
    }, []);

    // Obtener los datos de seguridad_personal a editar
    useEffect(() => {
        const fetchSeguridadPersonal = async () => {
            try {
                const response = await fetch(`/api/seguridadpersonals?id_usuario=${id_seguridadpersonal}`);
                if (!response.ok) {
                    throw new Error('Error al obtener el registro de seguridad personal');
                }
                const data = await response.json();
                setSeguridadPersonal(data);
            } catch (error) {
                setError((error as Error).message);
            }
        };

        fetchSeguridadPersonal();
    }, [id_seguridadpersonal]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setSeguridadPersonal({
            ...seguridadPersonal,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/seguridadpersonals`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(seguridadPersonal),
            });

            if (!response.ok) {
                throw new Error('Error al actualizar seguridad personal');
            }

            router.push('/seguridadpersonal'); // Redirigir después de la actualización
        } catch (error) {
            setError((error as Error).message);
        }
    };

    return (
        <FormContainer>
            <StyledCard>
                <StyledCardHeader
                    avatar={<Avatar aria-label="seguridadpersonal">{seguridadPersonal.usuario.charAt(0)}</Avatar>}
                    title="Editar Seguridad Personal"
                    subheader={`ID: ${seguridadPersonal.id_usuario}`}
                />
                <StyledCardContent>
                    <Typography variant="body2" color="textSecondary">
                        Edita los campos para actualizar los datos de seguridad personal.
                    </Typography>
                    {error && <Typography color="error">{error}</Typography>}
                    <form onSubmit={handleSubmit}>
                        <StyledSelect
                            name="id_empleado"
                            value={seguridadPersonal.id_empleado}
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
                        
                        <StyledSelect
                            name="id_rol"
                            value={seguridadPersonal.id_rol}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Selecciona un rol</option>
                            {roles.map((rol) => (
                                <option key={rol.id_rol} value={rol.id_rol}>
                                    {rol.descripcion}
                                </option>
                            ))}
                        </StyledSelect>

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
                            name="estatus"
                            value={seguridadPersonal.estatus}
                            onChange={handleChange}
                        >
                            <option value="activo">Activo</option>
                            <option value="inactivo">Inactivo</option>
                        </StyledSelect>
                        <StyledButton variant="contained" color="primary" fullWidth type="submit">
                            Actualizar Seguridad Personal
                        </StyledButton>
                    </form>
                </StyledCardContent>
            </StyledCard>
        </FormContainer>
    );
}
