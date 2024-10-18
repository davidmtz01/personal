"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { useGlobalState } from '@/app/context/globalProvider';

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

const CheckboxContainer = styled('div')`
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    & input[type="checkbox"] {
        margin-right: 10px;
    }

    & label {
        color: #fff;
    }
`;

interface Role {
    id_rol: string;
    descripcion: string;
}

interface AccessControl {
    [key: string]: boolean; // El acceso se basa en el ID de la tabla
}

export default function Tasks() {
    const { theme, user } = useGlobalState(); // Accedemos al usuario desde el estado global
    const [roles, setRoles] = useState<Role[]>([]);
    const [selectedRole, setSelectedRole] = useState<string>('');
    const [accessControl, setAccessControl] = useState<AccessControl>({});
    const router = useRouter();

    // Redirigir si el usuario no es administrador
    useEffect(() => {
        if (!user || user.role !== 'administrador') {
            router.push('/'); // Redirige a otra página si no es administrador
        }
    }, [user, router]);

    // Listado de tablas disponibles
    const tables = [
        { id: 'evaluaciones', name: 'Evaluaciones' },
        { id: 'roles', name: 'Roles' },
        { id: 'empleados', name: 'Empleados' },
        { id: 'asistencia', name: 'Asistencia' },
        { id: 'seguridad_personal', name: 'Seguridad Personal' },
        { id: 'nomina', name: 'Nómina' },
        { id: 'horarios', name: 'Horarios' },
        { id: 'usuarios', name: 'Usuarios' },
        { id: 'bitacora_personal', name: 'Bitácora Personal' },
        { id: 'bitacora_seguridad', name: 'Bitácora Seguridad' },
    ];

    useEffect(() => {
        const fetchRoles = async () => {
            const response = await fetch('/api/roles'); // Ajusta la ruta de la API
            const data = await response.json();
            setRoles(data);
        };

        fetchRoles();
    }, []);

    const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const roleId = event.target.value;
        setSelectedRole(roleId);
        const currentAccess = accessControl[roleId] || {};
        setAccessControl(currentAccess);
    };

    const handleCheckboxChange = (tableId: string) => {
        setAccessControl((prevAccess) => ({
            ...prevAccess,
            [tableId]: !prevAccess[tableId],
        }));
    };

    const handleSaveAccess = async () => {
        await fetch(`/api/roles/${selectedRole}/access`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(accessControl),
        });

        alert('Acceso guardado con éxito');
    };

    return (
        <FormContainer>
            <StyledCard>
                <StyledCardHeader
                    avatar={<Avatar aria-label="tasks">T</Avatar>}
                    title="Gestión de Acceso a Tablas"
                />
                <StyledCardContent>
                    <Typography variant="body2" color="textSecondary">
                        Selecciona un rol y gestiona el acceso a las tablas.
                    </Typography>
                    <StyledSelect value={selectedRole} onChange={handleRoleChange}>
                        <option value="" disabled>Seleccionar Rol</option>
                        {roles.map((role) => (
                            <option key={role.id_rol} value={role.id_rol}>
                                {role.descripcion} (ID: {role.id_rol})
                            </option>
                        ))}
                    </StyledSelect>

                    {tables.map((table) => (
                        <CheckboxContainer key={table.id}>
                            <input
                                type="checkbox"
                                checked={accessControl[table.id] || false}
                                onChange={() => handleCheckboxChange(table.id)}
                            />
                            <label>{table.name}</label>
                        </CheckboxContainer>
                    ))}
                    <StyledButton variant="contained" color="primary" fullWidth onClick={handleSaveAccess}>
                        Guardar Acceso
                    </StyledButton>
                </StyledCardContent>
            </StyledCard>
        </FormContainer>
    );
}
