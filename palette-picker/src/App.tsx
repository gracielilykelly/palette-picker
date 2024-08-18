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
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-6">Palette Picker</h1>
      <h3>Create beautiful palettes from an image</h3>
      <ImageUpload onImageUpload={handleImageUpload} />
      {imageSrc && (
        <div className="w-full max-w-sm mb-6">
          <img src={imageSrc} alt="Uploaded" className="w-full rounded shadow-md" />
        </div>
      )}
      {colors.length > 0 && <ColorPalette colors={colors} />}
    </div>
  );
};

export default App;
