// src/router.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layouts/Layout';
import Contact from './Views/Contact';
import LocationsView from './Views/LocationsView';
import SignUpForm from './Views/SignUpForm';
import AboutUs from './Views/AboutUs';
import PagoTarjeta from './Views/PagoTarjeta';

// Configuración de las rutas
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'locations',
        element: <LocationsView />,
      },
      {
        path: 'signup',
        element: <SignUpForm />,
      },
      {
        path: 'about',
        element: <AboutUs />,
      },
      {
        path: 'pago-tarjeta',
        element: <PagoTarjeta />,
      },
    ],
  },
]);

// Exportación del router
export default router;
