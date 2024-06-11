import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import ShowLocation from './pages/showLocation';
import CreateLocation from './pages/createLocation';
import EditLocation from './pages/editLocation';
import DeleteLocation from './pages/deleteLocation';
import Footer from './componets/home/footer';
import FabComponent from './componets/fabComponet';
import 'react-tiny-fab/dist/styles.css';
import 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`flex flex-col min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white`}>
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl">My App</h1>
        <button onClick={toggleTheme} className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white p-2 rounded">
          {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </header>
      <main className="flex-grow mb-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/travel/create" element={<CreateLocation />} />
          <Route path="/travel/details/:id" element={<ShowLocation />} />
          <Route path="/travel/edit/:id" element={<EditLocation />} />
          <Route path="/travel/delete/:id" element={<DeleteLocation />} />
        </Routes>
        <FabComponent />
      </main>
      <Footer />
    </div>
  );
};

export default App;
