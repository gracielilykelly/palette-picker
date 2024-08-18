import Vibrant from "node-vibrant";

export interface Color {
  colorName: string;
  hexValue: string;
}

export const buildPaletteFromImage = async (imageSrc: string): Promise<Color[]> => {
  const colors: Color[] = [];
  const palette = await Vibrant.from(imageSrc).getPalette();

  if (palette) {
    Object.entries(palette).forEach(([key, color]) => {
      // get first five colors
      if (color && colors.length < 5) {
        colors.push({
          colorName: key,
          hexValue: color.getHex(),
        });
      }
    });
  }

  return colors;
};
