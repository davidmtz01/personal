"use client";
import React, { createContext, useState, useContext } from "react";
import themes from "./themes"; // Asegúrate de que esta ruta sea correcta

// Contexto para el estado global
export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

// Proveedor de contexto global
export const GlobalProvider = ({ children }) => {
    const [selectedTheme, setSelectedTheme] = useState(0); // Estado para el tema seleccionado
    const [token, setToken] = useState(null); // Estado para el token
    const [user, setUser] = useState(null); // Estado para el usuario
    const theme = themes[selectedTheme]; // Obtenemos el tema actual

    return (
        <GlobalContext.Provider 
            value={{
                theme,
                token,
                user,
            }}
        >
            <GlobalUpdateContext.Provider value={{ setToken, setUser }}>
                {children}
            </GlobalUpdateContext.Provider>
        </GlobalContext.Provider>
    );
};

// Hooks personalizados para usar el contexto
export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);

