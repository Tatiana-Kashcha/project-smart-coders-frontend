import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';
import 'normalize.css';
import '../src/components/stylesheet/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/project-smart-coders-frontend">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
