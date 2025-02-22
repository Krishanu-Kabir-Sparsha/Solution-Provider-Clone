import React from 'react';
import ReactDOM from 'react-dom/client';
import { HeroUIProvider } from '@heroui/react';
import App from './App';
import './index.css';
import { CartProvider } from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
    <HeroUIProvider>
      <App />
    </HeroUIProvider>
    </CartProvider>
  </React.StrictMode>
);