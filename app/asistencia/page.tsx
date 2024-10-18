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

// Definir la interfaz Asistencia
interface Asistencia {
    id_asistencia: string;
    id_empleado: string;
    fecha_ingreso: string;
    hora_entrada: string;
    hora_salida: string;
    estatus: string;
}

// Definir la interfaz Empleado
interface Empleado {
    id_empleado: string;
    nombre: string;
}

// Contenedor estilizado
const AsistenciaCardStyled = styled('div')`
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

export default function AsistenciaCard() {
    const [asistencias, setAsistencias] = React.useState<Asistencia[]>([]);
    const [empleados, setEmpleados] = React.useState<Empleado[]>([]);
    const router = useRouter();

    // Cargar asistencias y empleados al iniciar
    React.useEffect(() => {
        const fetchData = async () => {
            const responseAsistencias = await fetch('/api/asistencias');
            const dataAsistencias: Asistencia[] = await responseAsistencias.json();
            setAsistencias(dataAsistencias);
            
            const responseEmpleados = await fetch('/api/empleados');
            const dataEmpleados: Empleado[] = await responseEmpleados.json();
            setEmpleados(dataEmpleados);
        };

        fetchData();
    }, []);

    const handleCrearAsistencia = () => {
        router.push('/crear-asistencia');
    };

    const handleEditarAsistencia = (asistencia: Asistencia) => {
        router.push(`/editar-asistencia/${asistencia.id_asistencia}`);
    };

    const handleBorrarAsistencia = async (id_asistencia: string) => {
        const response = await fetch(`/api/asistencias`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id_asistencia }), // Pasar el id_asistencia en el cuerpo de la solicitud
        });

        if (response.ok) {
            setAsistencias((prev) => prev.filter((as) => as.id_asistencia !== id_asistencia));
            console.log('Asistencia borrada:', id_asistencia);
        }
    };

    return (
        <AsistenciaCardStyled>
            <h1 style={{ marginBottom: '16px', textAlign: 'center' }}>Gestión de Asistencias</h1>
            <StyledButtonContainer>
                <Button variant="contained" color="primary" onClick={handleCrearAsistencia}>
                    Crear Asistencia
                </Button>
            </StyledButtonContainer>
            {asistencias.map((asistencia) => {
                // Buscar el nombre del empleado correspondiente
                const empleado = empleados.find(emp => emp.id_empleado === asistencia.id_empleado);
                const empleadoNombre = empleado ? empleado.nombre : 'Desconocido'; // Manejar si no se encuentra

                return (
                    <StyledCard key={asistencia.id_asistencia}>
                        <StyledCardHeader
                            avatar={
                                <Avatar aria-label="asistencia">
                                    {asistencia.id_empleado.charAt(0)}
                                </Avatar>
                            }
                            title={`Empleado: ${empleadoNombre} (ID: ${asistencia.id_empleado})`}
                            subheader={`Fecha: ${asistencia.fecha_ingreso} - Estatus: ${asistencia.estatus}`}
                        />
                        <StyledCardContent>
                            <Typography variant="body2">
                                Hora Entrada: {asistencia.hora_entrada} - Hora Salida: {asistencia.hora_salida}
                            </Typography>
                            <StyledButtonContainer>
                                <Button variant="outlined" color="secondary" onClick={() => handleEditarAsistencia(asistencia)}>
                                    Editar
                                </Button>
                                <Button variant="outlined" color="error" onClick={() => handleBorrarAsistencia(asistencia.id_asistencia)}>
                                    Borrar
                                </Button>
                            </StyledButtonContainer>
                        </StyledCardContent>
                    </StyledCard>
                );
            })}
        </AsistenciaCardStyled>
    );
}
