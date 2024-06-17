import React, { useState } from 'react';

const Accordion = ({ title, children }) => {
const [isVisible, setIsVisible] = useState(false);

const toggleListVisibility = () => {
    setIsVisible(!isVisible); // toggles the visibility state

};

return (
    <div>
        <button onClick={toggleListVisibility}>Toggle List</button>
        {isVisible && (
            <ul>
                <li>Five nights</li>
                <li>Five nights</li>
                <li>Five nights</li>
                <li>Five nights</li>
            </ul>
        )}
    </div>
)
    
}

export default Accordion;