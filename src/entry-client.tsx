import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // For client-side routing
import App from './App';
import './index.css'; // Ensure global styles are imported here too

const rootElement = document.getElementById('root');

if (rootElement) {
  hydrateRoot(
    rootElement,
    <React.StrictMode>
      <BrowserRouter> {/* Wrap App with BrowserRouter for client-side navigation */}
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}