import React from 'react';

interface ColorPaletteProps {
  colors: any[];
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ colors }) => {
  return (
  
    <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            backgroundColor: color.hexValue,
            width: '50px',
            height: '50px',
            borderRadius: '5px',
          }}
        />
      ))}
    </div>
  );
};

export default ColorPalette;
