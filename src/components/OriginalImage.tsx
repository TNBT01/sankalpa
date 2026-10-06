import { useState, useEffect } from 'react';

interface OriginalImageProps {
  storageKey: string;
  defaultSrc: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  objectFit?: 'cover' | 'contain';
}

export function OriginalImage({
  storageKey,
  defaultSrc,
  fallbackSrc,
  alt,
  className = '',
  objectFit = 'cover'
}: OriginalImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(() => {
    // Check if user has uploaded the original file via the in-browser loader
    const stored = localStorage.getItem(`tpa_custom_img_${storageKey}`);
    if (stored) return stored;
    return defaultSrc;
  });

  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleStorageChange = () => {
      const stored = localStorage.getItem(`tpa_custom_img_${storageKey}`);
      if (stored) {
        setImgSrc(stored);
        setHasError(false);
      }
    };
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('tpa_image_updated', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('tpa_image_updated', handleStorageChange);
    };
  }, [storageKey]);

  const handleError = () => {
    if (!hasError && fallbackSrc && imgSrc !== fallbackSrc) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      className={`${className} ${objectFit === 'contain' ? 'object-contain' : 'object-cover'}`}
      referrerPolicy="no-referrer"
    />
  );
}
