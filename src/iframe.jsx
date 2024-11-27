import React from 'react';

// EmbeddedWindow component that takes a 'link' prop
const EmbeddedWindow = ({ link }) => {
  return (
    <div>
      <h1>Embedded Webpage</h1>
      <iframe 
        src={link} 
        title="Embedded Window"
        width="100%" 
        height="600px" 
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default EmbeddedWindow;
