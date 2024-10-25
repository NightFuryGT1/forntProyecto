import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-black text-white py-4">
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-4">
          <div className="text-2xl font-bold">
            <Link to="/">AtlasGym</Link>
          </div>
          <div className="flex space-x-4">
            <Link to="/locations" className="text-yellow-500 hover:text-yellow-400">Ubicaciones</Link>
            <Link to="/contact" className="text-yellow-500 hover:text-yellow-400">Contáctanos</Link>
            <Link to="/about" className="text-yellow-500 hover:text-yellow-400">Acerca de Nosotros</Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-black text-white py-4 text-center">
        <p>© 2024 AtlasGym. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Layout;
