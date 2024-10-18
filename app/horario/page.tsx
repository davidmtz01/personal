"use client"; // Asegúrate de tener este encabezado en la parte superior
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

// Definir la interfaz Horario
interface Horario {
    id_horario: string;
    id_empleado: string;
    fecha: string;
    hora_entrada: string;
    hora_salida: string;
    estatus: 'activo' | 'inactivo';
}

// Definir la interfaz Empleado
interface Empleado {
    id_empleado: string;
    nombre: string;
    direccion: string;
    telefono: string;
    correo: string;
    fecha_ingreso: string;
    id_rol: string;
    estatus: string;
}

// Contenedor estilizado
const HorarioCardStyled = styled('div')`
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

const StyledButtonContainer = styled('div')`
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
`;

export default function HorarioCard() {
    const [horarios, setHorarios] = React.useState<Horario[]>([]);
    const [empleados, setEmpleados] = React.useState<Empleado[]>([]); // Agregar estado para empleados
    const router = useRouter();

    // Cargar horarios y empleados al iniciar
    React.useEffect(() => {
        const fetchData = async () => {
            const responseHorarios = await fetch('/api/horarios');
            const dataHorarios: Horario[] = await responseHorarios.json();
            setHorarios(dataHorarios);

            const responseEmpleados = await fetch('/api/empleados'); // Cargar empleados
            const dataEmpleados: Empleado[] = await responseEmpleados.json();
            setEmpleados(dataEmpleados);
        };

        fetchData();
    }, []);

    const handleCrearHorario = () => {
        router.push('/crear-horario'); // Redirigir a la página para crear horario
    };

    const handleEditarHorario = (horario: Horario) => {
        router.push(`/editar-horario/${horario.id_horario}`); // Redirigir a la página para editar horario
    };

    const handleBorrarHorario = async (id_horario: string) => {
        const response = await fetch(`/api/horarios`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id_horario }), // Pasar el id_horario en el cuerpo de la solicitud
        });

        if (response.ok) {
            setHorarios((prev) => prev.filter((hor) => hor.id_horario !== id_horario));
            console.log('Horario borrado:', id_horario);
        }
    };

    return (
        <HorarioCardStyled>
            <h1 style={{ marginBottom: '16px', textAlign: 'center' }}>Gestión de Horarios</h1>
            <StyledButtonContainer>
                <Button variant="contained" color="primary" onClick={handleCrearHorario}>
                    Crear Horario
                </Button>
            </StyledButtonContainer>
            {horarios.map((horario) => {
                // Buscar el empleado correspondiente
                const empleado = empleados.find(emp => emp.id_empleado === horario.id_empleado);
                const nombreEmpleado = empleado ? empleado.nombre : 'Desconocido'; // Manejar si no se encuentra

                return (
                    <StyledCard key={horario.id_horario}>
                        <StyledCardHeader
                            avatar={
                                <Avatar aria-label="horario">
                                    {nombreEmpleado.charAt(0)}
                                </Avatar>
                            }
                            title={`Horario ID: ${horario.id_horario}`}
                            subheader={`Empleado ID: ${horario.id_empleado} - Nombre: ${nombreEmpleado} - Fecha: ${horario.fecha} - Entrada: ${horario.hora_entrada} - Salida: ${horario.hora_salida}`}
                        />
                        <StyledCardContent>
                            <Typography variant="body2">
                                Estatus: {horario.estatus}
                            </Typography>
                            <StyledButtonContainer>
                                <Button variant="outlined" color="secondary" onClick={() => handleEditarHorario(horario)}>
                                    Editar
                                </Button>
                                <Button variant="outlined" color="error" onClick={() => handleBorrarHorario(horario.id_horario)}>
                                    Borrar
                                </Button>
                            </StyledButtonContainer>
                        </StyledCardContent>
                    </StyledCard>
                );
            })}
        </HorarioCardStyled>
    );
}
