import React from 'react';
import './ToggleButton.css';

// https://dev.to/narendersaini32/how-to-create-custom-toggle-button-in-react-387m
function ToggleButton({ toggleSelected, earliestFirst }) {
  return (
    <div>
      Earliest First?
      <div
        className='toggle-container'
        onClick={toggleSelected}
        id='deadline-input'
      >
        <div className={`dialog-button ${earliestFirst ? '' : 'disabled'}`}>
          {earliestFirst ? 'YES' : 'NO'}
        </div>
      </div>
    </div>
  );
}

export default ToggleButton;
