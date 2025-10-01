import { useState, useEffect } from "react";

interface ProgressiveImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderClassName?: string;
}

export default function ProgressiveImage({ 
  src, 
  alt, 
  className = "", 
  placeholderClassName = "" 
}: ProgressiveImageProps) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    
    img.onload = () => {
      setImageSrc(src);
      // Defer state change to next frame for visible fade-in transition
      requestAnimationFrame(() => {
        setImageLoading(false);
      });
    };
    
    img.src = src;

    return () => {
      img.onload = null;
    };
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {imageLoading && (
        <div 
          className={`absolute inset-0 bg-muted ${placeholderClassName}`}
          style={{
            background: 'linear-gradient(90deg, hsl(var(--muted)) 0%, hsl(var(--muted) / 0.8) 50%, hsl(var(--muted)) 100%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite'
          }}
        />
      )}
      {imageSrc && (
        <div
          role="img"
          aria-label={alt}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
            imageLoading ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
      )}
    </div>
  );
}
