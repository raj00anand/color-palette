import React, { useState } from 'react';
// import './colorPalete.css'

const colors = ["AliceBlue",
"AntiqueWhite",
"Aqua",
"Aquamarine",
"Azure",
"Beige",
"Bisque",
"Black",
"BlanchedAlmond",
"Blue",
"BlueViolet",
"Brown",
"BurlyWood",
"CadetBlue",
"Chartreuse",
"Chocolate",
"Coral",
"CornflowerBlue",
"Cornsilk",
"Crimson",
"Cyan",
"DarkBlue",
"DarkCyan",
"DarkGoldenRod",
"DarkGray",
"DarkGreen",
"DarkKhaki",
"DarkMagenta",
"DarkOliveGreen",
"DarkOrange",
"DarkOrchid",
"DarkRed",
"DarkSalmon",
"DarkSeaGreen",
"DarkSlateBlue",
"DarkSlateGray",
"DarkTurquoise",
"DarkViolet",
"DeepPink",
"DeepSkyBlue",
"DimGray",
"DodgerBlue",
"FireBrick",
"FloralWhite",
"ForestGreen",
"Fuchsia",
"Gainsboro",
"GhostWhite",
"Gold",
"GoldenRod",
"Gray",
"Green",
"GreenYellow"];

const ColorPalette = ({ onSelectColor }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    if (color === selectedColor) {
      // If the clicked color is already selected, unselect it
      setSelectedColor(null);
      onSelectColor(null); // Invoke the callback with null to indicate unselection
    } else {
      setSelectedColor(color);
      onSelectColor(color); // Invoke the callback with the selected color
    }
  };

  return (
    <div className='colors' 
    style={{
      marginTop: '50px',
      display: 'flex', 
      flexDirection: 'row', 
      flexWrap: 'wrap',
      justifyContent: 'center'
      }}>
      {colors.map((color) => (
        <div
          key={color}
          style={{
            backgroundColor: color,
            width: '250px',
            height: '150px',
            margin: '15px',
            border: color === selectedColor ? '2px solid black' : 'none',
            cursor: 'pointer',
            borderRadius: '5px',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
          }}
          onClick={() => handleColorClick(color)}
        ></div>
      ))}
    </div>
  );
};

export default ColorPalette;