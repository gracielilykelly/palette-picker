import React, { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import ColorPalette from './components/ColorPalette';
import { buildPaletteFromImage, Color } from './services/palettes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt } from '@fortawesome/free-solid-svg-icons';
import Spinner from './components/LoadingSpinner';

const App: React.FC = () => {
  const [colors, setColors] = useState<Color[]>([]);
  const [loading, setLoading] = useState<boolean>(false)
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);

  const handleImageUpload = async (file: File) => {
    setImageSrc(undefined)
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
    <section className='flex flex-col min-h-screen'>
      <div className="flex flex-col items-center p-4 mt-12">
        <header>
          <h1 className="text-2xl font-bold mb-2 dark:text-blue-300">Palette Picker</h1>
          <h3 className="text-xl mb-6 dark:text-gray-400">Create beautiful palettes from an image</h3>
        </header>
        <main className="flex-grow">
          <ImageUpload onImageUpload={handleImageUpload} />
          {loading && (<Spinner />)}
          {colors.length > 0 && <ColorPalette colors={colors} imageSrc={imageSrc} />}
        </main>

      </div>


      <footer className="bg-gray-800 text-white p-4 text-center mt-auto">
        <div className="w-full mx-auto max-w-screen-xl p-4">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            <a href="https://github.com/gracielilykelly" className="hover:text-blue-300" target="_blank"><FontAwesomeIcon icon={faAt}/>gracielilykelly</a>
          </span>
        </div>
      </footer>

    </section>
  );
};

export default App;
