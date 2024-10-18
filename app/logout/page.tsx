"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGlobalUpdate } from "@/app/context/globalProvider"; // Asegúrate de que la ruta sea correcta

export default function LogoutPage() {
    const router = useRouter();
    const { setUser, setToken } = useGlobalUpdate(); // Actualiza el estado global

    useEffect(() => {
        const handleLogout = async () => {
            try {
                // Llamada a la API para realizar el cierre de sesión
                await fetch('/api/auth/logout', { method: 'POST' });
                
                // Limpiamos los datos de autenticación del localStorage
                localStorage.removeItem('token');

                // Actualizamos el contexto global eliminando el usuario y el token
                setUser(null);
                setToken(null);

                // Redirigimos a la página de login
                router.push('/login');
            } catch (error) {
                console.error("Error al cerrar sesión:", error);
            }
        };

        handleLogout();
    }, [router, setUser, setToken]);

    return null; // No necesitamos renderizar nada en esta página
}
