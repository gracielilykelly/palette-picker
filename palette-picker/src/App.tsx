import React, { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import ColorPalette from './components/ColorPalette';
import { buildPaletteFromImage, Color } from './services/palettes';

const App: React.FC = () => {
  const [colors, setColors] = useState<Color[]>([]);
  const [loading, setLoading] = useState<boolean>(false)
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleImageUpload = async (file: File) => {
    setImageSrc(null)
    setColors([])
    setLoading(true);
    const reader = new FileReader();
    reader.onload = async (e) => {
      if (e.target) {
        const paletteColors = await buildPaletteFromImage(reader.result as string);
        setImageSrc(e.target.result as string);
        setColors(paletteColors);
      }
      setLoading(false);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-6">Palette Picker</h1>
      <h3>Create beautiful palettes from an image</h3>
      <ImageUpload onImageUpload={handleImageUpload} />
      {loading && (<p>Loading...</p>)}
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
