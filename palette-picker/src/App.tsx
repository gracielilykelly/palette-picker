import React, { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import ColorPalette from './components/ColorPalette';
import { buildPaletteFromImage } from './services/palettes';

const App: React.FC = () => {
  const [colors, setColors] = useState<object[]>([]);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target) {
        setImageSrc(e.target.result as string);
        const paletteColors = buildPaletteFromImage(reader.result as string);
        setColors(paletteColors);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Palette Picker</h1>
      <h3>Create beautiful palettes from an image</h3>
      <ImageUpload onImageUpload={handleImageUpload} />
      {imageSrc && (
        <div>
          <img src={imageSrc} alt="Uploaded" style={{ maxWidth: '100%', marginTop: '20px' }} />
        </div>
      )}
      {colors.length > 0 && <ColorPalette colors={colors} />}
    </div>
  );
};

export default App;
