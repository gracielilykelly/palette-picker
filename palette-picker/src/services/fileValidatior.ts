export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export const validateFile = (file: File, maxSizeMB: number = 2, maxFilenameLength: number = 50): ValidationResult => {
  const errors: string[] = [];

  // Check file size (convert MB to bytes)
  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  if (file.size > maxSizeBytes) {
    errors.push(`File size should be less than ${maxSizeMB}MB.`);
  }

  // Check filename length
  const filename = file.name;
  if (filename.length > maxFilenameLength) {
    errors.push(`Filename should be less than ${maxFilenameLength} characters.`);
  }

  // Check for special characters in filename
  const specialCharPattern = /[^a-zA-Z0-9._-]/;
  if (specialCharPattern.test(filename)) {
    errors.push('Filename contains invalid characters.');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};