import Vibrant from "node-vibrant";

export const buildPaletteFromImage = function (imageSrc: string): object[] {
    const colors: object[] = [];
    Vibrant.from(imageSrc).getPalette()
    .then((palette: any) => {
        Object.entries(palette).forEach(([key]) => {
            const colorName = key;
            const hexValue = palette[key].getHex();
            colors.push({colorName, hexValue})
        })
        
    })
    return colors;
}
