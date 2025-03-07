import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Asegúrate de importar esto una sola vez
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Solo aquí debe ir BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>,
);
