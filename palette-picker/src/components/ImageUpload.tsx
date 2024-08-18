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
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
    </div>
  );
};

export default ImageUpload;
