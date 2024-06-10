import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import ShowLocation from './pages/showLocation';
import CreateLocation from './pages/createLocation';
import EditLocation from './pages/editLocation';
import DeleteLocation from './pages/deleteLocation';
import Footer from './componets/home/footer'; // Corrected the spelling to 'components'
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';


import 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome styles



class App extends Component {
  render() {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/travel/create" element={<CreateLocation />} />
            <Route path="/travel/details/:id" element={<ShowLocation />} />
            <Route path="/travel/edit/:id" element={<EditLocation />} />
            <Route path="/travel/delete/:id" element={<DeleteLocation />} />
            {/* Add more Route components for other paths if needed */}
          </Routes>
            {/* Floating Action Button */}
        {/* Floating Action Button */}
        <Fab
          mainButtonStyles={{ backgroundColor: 'blue' }}
          icon={<i className="fas fa-plus"></i>}
          alwaysShowTitle={true}
        >
          <Action
            text="Add Location"
            onClick={() => alert('Add Location clicked!')}
            style={{ backgroundColor: 'red' }}
          >
            <i className="fas fa-map-marker-alt"></i>
          </Action>
          <Action
            text="View Locations"
            onClick={() => alert('View Locations clicked!')}
            style={{ backgroundColor: 'green' }}
          >
            <i className="fas fa-eye"></i>
          </Action>
          {/* Add more actions as needed */}
        </Fab>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
