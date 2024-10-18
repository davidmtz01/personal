"use client"; // Asegúrate de tener este encabezado en la parte superior
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

// Definir la interfaz Nomina
interface Nomina {
    id_nomina: string;
    id_empleado: string;
    periodo: string; // o Date, dependiendo de cómo manejes las fechas
    salario: number; // Asegúrate de que sea number
    estatus: string;
}

// Definir la interfaz Empleado
interface Empleado {
    id_empleado: string;
    nombre: string;
    // Agrega otras propiedades que necesites de la tabla empleado
}

// Contenedor estilizado
const NominaCardStyled = styled('div')`
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

export default function NominaCard() {
    const [nominas, setNominas] = React.useState<Nomina[]>([]);
    const [empleados, setEmpleados] = React.useState<Empleado[]>([]);
    const router = useRouter();

    // Cargar nóminas y empleados al iniciar
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const responseNominas = await fetch('/api/nominas');
                const dataNominas: Nomina[] = await responseNominas.json();
                
                // Verifica que dataNominas sea un arreglo antes de establecer el estado
                if (Array.isArray(dataNominas)) {
                    setNominas(dataNominas);
                } else {
                    console.error('Error: dataNominas no es un arreglo:', dataNominas);
                    setNominas([]); // Establece a un arreglo vacío si no es válido
                }

                const responseEmpleados = await fetch('/api/empleados');
                const dataEmpleados: Empleado[] = await responseEmpleados.json();

                // Verifica que dataEmpleados sea un arreglo antes de establecer el estado
                if (Array.isArray(dataEmpleados)) {
                    setEmpleados(dataEmpleados);
                } else {
                    console.error('Error: dataEmpleados no es un arreglo:', dataEmpleados);
                    setEmpleados([]); // Establece a un arreglo vacío si no es válido
                }
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };

        fetchData();
    }, []);

    const handleCrearNomina = () => {
        router.push('/crear-nomina');
    };

    const handleEditarNomina = (nomina: Nomina) => {
        router.push(`/editar-nomina/${nomina.id_nomina}`);
    };

    const handleBorrarNomina = async (id_nomina: string) => {
        const response = await fetch(`/api/nominas`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id_nomina }),
        });

        if (response.ok) {
            setNominas((prev) => prev.filter((nom) => nom.id_nomina !== id_nomina));
            console.log('Nómina borrada:', id_nomina);
        }
    };

    return (
        <NominaCardStyled>
            <h1 style={{ marginBottom: '16px', textAlign: 'center' }}>Gestión de Nóminas</h1>
            <StyledButtonContainer>
                <Button variant="contained" color="primary" onClick={handleCrearNomina}>
                    Crear Nómina
                </Button>
            </StyledButtonContainer>
            {Array.isArray(nominas) && nominas.map((nomina) => {
                const empleado = empleados.find(emp => emp.id_empleado === nomina.id_empleado);
                const nombreEmpleado = empleado ? empleado.nombre : 'Desconocido';

                return (
                    <StyledCard key={nomina.id_nomina}>
                        <StyledCardHeader
                            avatar={
                                <Avatar aria-label="nomina">
                                    {nombreEmpleado.charAt(0)}
                                </Avatar>
                            }
                            title={`Nómina ID: ${nomina.id_nomina}`}
                            subheader={`Empleado ID: ${nomina.id_empleado} - Nombre: ${nombreEmpleado} - Periodo: ${nomina.periodo} - Salario: $${Number(nomina.salario).toFixed(2)} - Estatus: ${nomina.estatus}`}
                        />
                        <StyledCardContent>
                            <StyledButtonContainer>
                                <Button variant="outlined" color="secondary" onClick={() => handleEditarNomina(nomina)}>
                                    Editar
                                </Button>
                                <Button variant="outlined" color="error" onClick={() => handleBorrarNomina(nomina.id_nomina)}>
                                    Borrar
                                </Button>
                            </StyledButtonContainer>
                        </StyledCardContent>
                    </StyledCard>
                );
            })}
        </NominaCardStyled>
    );
}
