import { faCheckCircle, faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

interface ColorPaletteProps {
    hexValue: string;
}

const ColorBox: React.FC<ColorPaletteProps> = ({ hexValue }) => {
    const [copiedColor, setCopiedColor] = useState<string | null>(null);

    const handleColorClick = async () => {
        await navigator.clipboard.writeText(hexValue);
        setCopiedColor(hexValue);
        setTimeout(() => setCopiedColor(null), 1000); // Clear after 1 seconds
    };

    return (
        <div className="relative group cursor">
            <div
                className='bg-white shadow-md overflow-hidden cursor-pointer'
                style={{
                    backgroundColor: hexValue,
                    width: '75px',
                    height: '80px',
                }}
            >
            </div>

            {/* Copy Overlay */}
            <div className="absolute inset-0 cursor-pointer flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"
                onClick={() => handleColorClick()}>
                <FontAwesomeIcon
                    icon={copiedColor === hexValue ? faCheckCircle : faCopy}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"

                />
            </div>
        </div>
    );
};

export default ColorBox;
