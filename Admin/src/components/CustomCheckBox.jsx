import React, { useState } from 'react';

const CustomCheckbox = ({setIsFeatured}) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
   
    setIsChecked(prevState => !prevState);
    setIsFeatured(prevState=>!prevState);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div
        onClick={toggleCheckbox}
        style={{
          width: '20px',
          height: '20px',
          border: '2px solid rgba(0,0,0)',
          borderRadius: '4px',
          backgroundColor: isChecked ? 'var(--primary-color)' : 'transparent',
          cursor: 'pointer',
          transition: 'background-color 0.2s',
        }}
      />
      <span style={{ marginLeft: '10px' }}>
       Add to featured
      </span>
    </div>
  );
};

export default CustomCheckbox;
