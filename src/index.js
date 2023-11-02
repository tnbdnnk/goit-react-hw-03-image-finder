import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/App.styled';
import './index.css';

const theme = {
    colors: {
        white: '#f8efeff5',
        err: '#ff6060',
        inputField: '#547c7a',
        bgBtn: '#547c7a',
        bgPage: '#cbd5d4',
    },
    spacing: value => `${value * 2}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
            <GlobalStyle />
        </ThemeProvider>
    </React.StrictMode>
);
