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
    <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6'>
      {colors.map((color, index) => (
        <div
          key={index}
          className='flex flex-col items-center justify-center bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 cursor-pointer'
          style={{
            backgroundColor: color.hexValue,
            width: '50px',
            height: '50px',
            cursor: 'pointer',
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
