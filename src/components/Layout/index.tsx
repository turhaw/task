import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../NavBar";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useAppSelector } from '../../hooks';


export const GlobalStyle = createGlobalStyle `
        body {
            padding:0;
            margin:0;
            background-color: ${(props: any) => props.theme.backgroundColor};
        }
`;

const Layout = () => {
    const themeSelector = useAppSelector((state) => state.themeToggle.theme)
    return  (
        <ThemeProvider theme={themeSelector}>
            <GlobalStyle/>
            <Navbar/>
            <Outlet/>
        </ThemeProvider>
    )
}

export default Layout;