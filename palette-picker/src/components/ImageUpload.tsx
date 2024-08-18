import React, { ChangeEvent, useState } from 'react';
import { ValidationResult, validateFile } from '../services/fileValidatior';

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload }) => {
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  const handleFileValidation = (file: File) => {
    const validationResult: ValidationResult = validateFile(file);
    if (!validationResult.isValid) {
      setErrorMessages(validationResult.errors);
      return false;
    }
    setErrorMessages([]);
    return true;
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      if (handleFileValidation(e.target.files[0])) {
        onImageUpload(e.target.files[0]);
      }
    }
  };

  return (
    <div className='mb-6'>
      <div className='flex items-center justify-center mt-3 text-gray-300'>
        <input className="block w-full text-gray-900 border border-gray-300 
      rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 
      dark:border-gray-600 dark:placeholder-gray-400" accept="image/*" onChange={handleFileChange} type="file" />
      </div>
      {errorMessages.length > 0 && (
        <div className="text-red-500 text-sm mt-1">
          {errorMessages.map((error: string, index: number) => (
            <span key={index}>{error}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageUpload;

