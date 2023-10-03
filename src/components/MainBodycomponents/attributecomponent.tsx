import React, { useState } from 'react';
import toggleOff from '../../toggle/icons8-toggle-off-48.png';
import toggleOn from '../../toggle/icons8-toggle-on-48.png';
 
const AttributeComponent = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);

  const handleToggle = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div className='flex gap16 alignItems'>
      <div className='flex gap4 alignItems'>
        <input type="checkbox" /> <h4>Internal</h4>
      </div>
      <div className='flex gap4 alignItems'>
        {isToggleOn ? (
          <img className='toggle-image' src={toggleOn} onClick={handleToggle} alt="Toggle On" />
        ) : (
          <img className='toggle-image' src={toggleOff} onClick={handleToggle} alt="Toggle Off" />
        )}
        <h4>{isToggleOn ? 'Hide' : 'Show'}</h4>
      </div>
    </div>
  );
};

export default AttributeComponent;
