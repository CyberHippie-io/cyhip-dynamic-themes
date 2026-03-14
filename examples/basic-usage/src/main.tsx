// src/main.tsx (Vite)
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { AppThemeProvider } from './themes/app-theme-provider.tsx';
import './themes/root.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AppThemeProvider>
            <App />
        </AppThemeProvider>
    </StrictMode>,
);
