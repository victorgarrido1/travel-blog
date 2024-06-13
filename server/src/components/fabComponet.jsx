import React from 'react';
import { Fab, Action } from 'react-tiny-fab';
import { useNavigate } from 'react-router-dom';
import 'react-tiny-fab/dist/styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome styles

const FabComponent = () => {
    const navigate = useNavigate();

    return (
        <Fab
            mainButtonStyles={{ backgroundColor: 'blue' }}
            icon={<i className='fas fa-plus'></i>}
            alwaysShowTitle={true}
        >
            <Action
                text='Add Location'
                onClick={() => navigate('/travel/create')} // Navigate to add location page
                style={{ backgroundColor: 'red' }}
            >
                <i className='fas fa-map-marker-alt'></i>
            </Action>
            <Action
                text='Send Email'
                onClick={() => window.location.href = 'mailto:someone@example.com?subject=Subject&body=Body%20Text'}
                style={{ backgroundColor: 'blue' }}
            >
                <i className="fas fa-envelope"></i>
            </Action>
        </Fab>
    );
};

export default FabComponent;