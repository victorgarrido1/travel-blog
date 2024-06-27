import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import Home from './pages/home';
import ShowLocation from './pages/showLocation';
import CreateLocation from './pages/createLocation';
import EditLocation from './pages/editLocation';
import DeleteLocation from './pages/deleteLocation';
import NotFound from './pages/notFound';
import Footer from './components/home/footer';
import FabComponent from './components/fabComponet';
import VacationPackages from './pages/vacationPackages';
import LocationAttractions from './pages/LocationAttraction';
import ClothingPage from './pages/Clothing';
import 'react-tiny-fab/dist/styles.css';
import 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './fonts.css'; // Import the custom font

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
        <Link to="/">
          <h1 className="text-3xl" style={{ fontFamily: 'Josefin Sans, sans-serif' }}>Travel Lit Lounge</h1>
        </Link>
        <button 
          onClick={toggleTheme} 
          className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white p-2 rounded flex items-center justify-center"
        >
          {theme === 'dark' ? <FaSun className='text-yellow-500' size={24} /> : <FaMoon className='text-blue-500' size={24} />}
        </button>
      </header>
      <main className="flex-grow mb-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/travel/create" element={<CreateLocation />} />
          <Route path="/travel/details/:id" element={<ShowLocation />} />
          <Route path="/travel/edit/:id" element={<EditLocation />} />
          <Route path="/travel/delete/:id" element={<DeleteLocation />} />
          <Route path="/travel/vacation-packages" element={<VacationPackages />} /> 
          <Route path="/travel/location-attractions" element={<LocationAttractions />} /> 
          <Route path="/travel/clothing" element={<ClothingPage />} />
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FabComponent />
      </main>
      <Footer />
    </div>
  );
};

export default App;
