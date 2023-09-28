import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme';
import './index.css';
import 'normalize.css';
import '../src/stylesheet/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/project-smart-coders-frontend">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
