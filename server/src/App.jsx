import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import ShowLocation from './pages/showLocation';
import CreateLocation from './pages/createLocation';
import EditLocation from './pages/editLocation';  //to switch to delete 
import DeleteLocation from './pages/deleteLocation'; // and here wil can switch to edit?

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travel/create" element={<CreateLocation />} />
        <Route path="/travel/details/:id" element={<ShowLocation />} />
        <Route path="/travel/edit/:id" element={<EditLocation />} />
        <Route path="/travel/delete/:id" element={<DeleteLocation />} />
        {/* Add more Route components for other paths if needed */}
      </Routes>
    );
  }
}

export default App;
