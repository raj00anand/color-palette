import React from 'react';
import ColorPalette from './components/ColorPalette';

const App = () => {

  document.body.style.backgroundColor = '#F1F6F9'
  const handleColorSelection = (color) => {
    console.log('Selected color:', color);
    // Perform any other actions based on the selected color
  };

  return (
    <div style={{textAlign: 'center', marginTop: '50px', fontFamily: 'VT323', fontSize: '30px'}}>
      <h1>Color Palette</h1>
      <ColorPalette onSelectColor={handleColorSelection} />
    </div>
  );
};

export default App;