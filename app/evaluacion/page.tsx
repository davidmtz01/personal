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

// Definir la interfaz Evaluacion
interface Evaluacion {
    id_evaluacion: string;
    id_empleado: string;
    fecha: string;
    puntuacion: number;
    comentarios: string;
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
const EvaluacionCardStyled = styled('div')`
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

export default function EvaluacionCard() {
    const [evaluaciones, setEvaluaciones] = React.useState<Evaluacion[]>([]);
    const [empleados, setEmpleados] = React.useState<Empleado[]>([]); // Agregar estado para empleados
    const router = useRouter();

    // Cargar evaluaciones y empleados al iniciar
    React.useEffect(() => {
        const fetchData = async () => {
            const responseEvaluaciones = await fetch('/api/evaluaciones');
            const dataEvaluaciones: Evaluacion[] = await responseEvaluaciones.json();
            setEvaluaciones(dataEvaluaciones);

            const responseEmpleados = await fetch('/api/empleados'); // Cargar empleados
            const dataEmpleados: Empleado[] = await responseEmpleados.json();
            setEmpleados(dataEmpleados);
        };

        fetchData();
    }, []);

    const handleCrearEvaluacion = () => {
        router.push('/crear-evaluacion'); // Redirigir a la página para crear evaluación
    };

    const handleEditarEvaluacion = (evaluacion: Evaluacion) => {
        router.push(`/editar-evaluacion/${evaluacion.id_evaluacion}`); // Redirigir a la página para editar evaluación
    };

    const handleBorrarEvaluacion = async (id_evaluacion: string) => {
        const response = await fetch(`/api/evaluaciones`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id_evaluacion }), // Pasar el id_evaluacion en el cuerpo de la solicitud
        });

        if (response.ok) {
            setEvaluaciones((prev) => prev.filter((evalu) => evalu.id_evaluacion !== id_evaluacion));
            console.log('Evaluación borrada:', id_evaluacion);
        }
    };

    return (
        <EvaluacionCardStyled>
            <h1 style={{ marginBottom: '16px', textAlign: 'center' }}>Gestión de Evaluaciones</h1>
            <StyledButtonContainer>
                <Button variant="contained" color="primary" onClick={handleCrearEvaluacion}>
                    Crear Evaluación
                </Button>
            </StyledButtonContainer>
            {evaluaciones.map((evaluacion) => {
                // Buscar el empleado correspondiente
                const empleado = empleados.find(emp => emp.id_empleado === evaluacion.id_empleado);
                const nombreEmpleado = empleado ? empleado.nombre : 'Desconocido'; // Manejar si no se encuentra

                return (
                    <StyledCard key={evaluacion.id_evaluacion}>
                        <StyledCardHeader
                            avatar={
                                <Avatar aria-label="evaluacion">
                                    {nombreEmpleado.charAt(0)}
                                </Avatar>
                            }
                            title={`Evaluación ID: ${evaluacion.id_evaluacion}`}
                            subheader={`Empleado ID: ${evaluacion.id_empleado} - Nombre: ${nombreEmpleado} - Fecha: ${evaluacion.fecha} - Puntaje: ${evaluacion.puntuacion}`}
                        />
                        <StyledCardContent>
                            <Typography variant="body2">
                                Comentarios: {evaluacion.comentarios}
                            </Typography>
                            <StyledButtonContainer>
                                <Button variant="outlined" color="secondary" onClick={() => handleEditarEvaluacion(evaluacion)}>
                                    Editar
                                </Button>
                                <Button variant="outlined" color="error" onClick={() => handleBorrarEvaluacion(evaluacion.id_evaluacion)}>
                                    Borrar
                                </Button>
                            </StyledButtonContainer>
                        </StyledCardContent>
                    </StyledCard>
                );
            })}
        </EvaluacionCardStyled>
    );
}
