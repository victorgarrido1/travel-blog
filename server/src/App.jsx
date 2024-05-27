import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import ShowLocation from './pages/showLocation';
import CreateLocation from './pages/createLocation';
import EditLocation from './pages/editLocation';
import DeleteLocation from './pages/deleteLocation';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/travel/create" element={<CreateLocation />} />
          <Route path="/travel/show" element={<ShowLocation />} />
          <Route path="/travel/edit" element={<EditLocation />} />
          <Route path="/travel/delete" element={<DeleteLocation />} />
          {/* Add more Route components for other paths if needed */}
        </Routes>
      </Router>
    );
  }
}

export default App;