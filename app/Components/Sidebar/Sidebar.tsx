// Sidebar.tsx
"use client"; // Asegúrate de que esto sea un componente del lado del cliente
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalState } from "@/app/context/globalProvider";
import Image from "next/image";
import Link from 'next/link';
import { usePathname, useRouter } from "next/navigation";
import menu from "@/app/utils/menu";

function Sidebar() {
    const { theme, user } = useGlobalState(); // Accede al contexto global
    const router = useRouter();
    const pathname = usePathname();

    // Redirigir a la página de inicio de sesión si no hay usuario
    useEffect(() => {
        if (!user) {
            router.push('/login'); // Cambia esto a la ruta de inicio de sesión
        }
    }, [user, router]);

    // Definimos la función handleClick
    const handleClick = (link: string) => {
        router.push(link);
    };

    // Si no hay usuario, mostramos un mensaje en lugar del sidebar
    if (!user) {
        return (
            <SidebarStyled theme={theme}>
                <h2>Por favor inicia sesión para acceder al menú.</h2>
                <button onClick={() => router.push('/login')}>Ir a Iniciar Sesión</button>
            </SidebarStyled>
        );
    }

    return (
        <SidebarStyled theme={theme}>
            <div className="profile">
                <div className="profile-overlay"></div>
                <div className="image">
                    <Image width={70} height={70} src="/profile1.png" alt="profile" />
                </div>
                <h1>
                    <span>{user?.nombre_usuario || 'Sin'}</span>
                    <span>Rostro</span>
                </h1>
            </div>
            <ul className="nav-items">
                {menu.map((item) => {
                    if (!item) return null; // Asegúrate de que item no sea undefined
                    const link = item.link;
                    return (
                        <li key={item.id} className={`nav-item ${pathname === link ? "active" : ""}`} onClick={() => handleClick(link)}>
                            {item.icon}
                            <Link href={link}>{item.title}</Link>
                        </li>
                    );
                })}
            </ul>
            <button onClick={() => router.push('/logout')}>Cerrar sesión</button>
        </SidebarStyled>
    );
}

const SidebarStyled = styled.nav`
    position: relative;
    width: ${(props) => props.theme.sidebarWidth};
    background-color: ${(props) => props.theme.colorBg2};
    border: 2px solid ${(props) => props.theme.borderColor2};
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${(props) => props.theme.colorGrey3};

    .profile {
        margin: 1.5rem;
        padding: 1rem 0.8rem;
        position: relative;
        border-radius: 1rem;
        cursor: pointer;
        font-weight: 500;
        color: ${(props) => props.theme.colorGrey0};
        display: flex;
        align-items: center;

        .profile-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            backdrop-filter: blur(10px);
            z-index: 0;
            background: ${(props) => props.theme.colorBg3};
            transition: all 0.55s linear;
            border-radius: 1rem;
            border: 2px solid ${(props) => props.theme.borderColor2};
            opacity: 0.2;
        }

        h1 {
            font-size: 1.2rem;
            display: flex;
            flex-direction: column;
            line-height: 1.4rem;
        }

        .image,
        h1 {
            position: relative;
            z-index: 1;
        }

        .image {
            flex-shrink: 0;
            display: inline-block;
            overflow: hidden;
            transition: all 0.5s ease;
            border-radius: 100%;
            width: 70px;
            height: 70px;

            img {
                border-radius: 100%;
                transition: all 0.5s ease;
            }
        }

        &:hover {
            .profile-overlay {
                opacity: 1;
                border: 2px solid ${(props) => props.theme.borderColor2};
            }

            img {
                transform: scale(1.1);
            }
        }
    }

    .nav-item {
        padding: 0.6rem 0.8rem 0.7rem 1.6rem; /* Reduce padding */
        margin: 0.2rem 0; /* Reduce margin */
        display: grid;
        grid-template-columns: 30px 1fr; /* Reduce icon size */
        cursor: pointer;
        align-items: center;

        a {
            font-size: 0.8rem; /* Reduce font size */
            font-weight: 500;
            transition: all 0.3s ease-in-out;
            z-index: 2;
            line-height: 1;
        }

        i {
            display: flex;
            align-items: center;
            color: ${(props) => props.theme.colorIcons};
        }

        &:hover {
            &::after {
                width: 100%;
            }
        }
    }

    .active {
        background-color: ${(props) => props.theme.activeNavLink};

        i,
        a {
            color: ${(props) => props.theme.colorIcons2};
        }
    }

    .active::before {
        width: 0.2rem; /* Reduce active border width */
    }

    > button {
        margin: 1rem; /* Reduce button margin */
    }
`;

export default Sidebar;
