import React, {useState} from 'react';

interface ColorPaletteProps {
  colors: any[];
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ colors }) => {
    const [copiedColor, setCopiedColor] = useState<string | null>(null);
    const handleColorClick = async (hexValue: string) => {
      await navigator.clipboard.writeText(hexValue);
      setCopiedColor(hexValue);
      setTimeout(() => setCopiedColor(null), 1000); // Clear after 1 seconds
  };

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
            cursor: 'pointer',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => handleColorClick(color.hexValue)}
        >
          {copiedColor === color.hexValue && (
            <span
              style={{
                position: 'absolute',
                color: '#fff',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                padding: '5px',
                borderRadius: '3px',
                fontSize: '12px',
              }}
            >
              Copied!
            </span>
          )}
          </div>
      ))}
    </div>
  );
};

export default ColorPalette;
