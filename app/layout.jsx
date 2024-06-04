"use client";

import "./globals.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "react-toastify/dist/ReactToastify.css";
import { ptBR } from '@mui/x-date-pickers/locales';

const theme = createTheme();

export default function RootLayout({ children }) {
    return (
        <html lang="pt_BR">
            <body>
                <ThemeProvider theme={theme}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={ptBR}>
                        <CssBaseline />
                        {children}
                    </LocalizationProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
