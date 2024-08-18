import React from 'react';
import { Color } from '../services/palettes';
import ColorBox from './ColorBox';

interface ColorPaletteProps {
  colors: Color[];
  imageSrc: string | undefined;
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ colors, imageSrc }) => {

  return (
    <section className="w-full max-w-sm mb-6 mt-12">
      <div className="mb-6">
        <img src={imageSrc} alt="Uploaded Image" className="w-full rounded shadow-md" />
      </div>

      <div className='flex justify-center gap-0'>
        {colors.map((color, index) => (
          <div key={index}>
          <ColorBox hexValue={color.hexValue} />
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default ColorPalette;
