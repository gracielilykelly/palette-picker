import React, { ChangeEvent } from 'react';

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload }) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onImageUpload(e.target.files[0]);
    }
  };

  return (
    <div className='flex items-center justify-center mt-3 text-gray-300'>
      <input type="file" accept="image/*" onChange={handleFileChange} aria-label='hello' />
    </div>
  );
};

export default ImageUpload;
