import React, { useState, useCallback, useMemo, memo } from 'react';

interface AppImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  onClick?: () => void;
  fallbackSrc?: string;
  loading?: 'lazy' | 'eager';
  [key: string]: any;
}

const AppImage = memo(function AppImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fill = false,
  sizes,
  onClick,
  fallbackSrc = '/assets/images/no_image.png',
  loading = 'lazy',
  ...props
}: AppImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleError = useCallback(() => {
    if (!hasError && imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc);
      setHasError(true);
    }
    setIsLoading(false);
  }, [hasError, imageSrc, fallbackSrc]);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    setHasError(false);
  }, []);

  const imageClassName = useMemo(() => {
    const classes = [className];
    if (isLoading) classes.push('bg-gray-200');
    if (onClick) classes.push('cursor-pointer hover:opacity-90 transition-opacity duration-200');
    if (fill) classes.push('absolute inset-0 w-full h-full object-cover');
    return classes.filter(Boolean).join(' ');
  }, [className, isLoading, onClick, fill]);

  const img = (
    <img
      src={imageSrc}
      alt={alt}
      width={fill ? undefined : width || 400}
      height={fill ? undefined : height || 300}
      sizes={sizes}
      className={imageClassName}
      loading={priority ? 'eager' : loading}
      onError={handleError}
      onLoad={handleLoad}
      onClick={onClick}
      {...props}
    />
  );

  if (fill) {
    return (
      <div className="relative" style={{ width: '100%', height: '100%' }}>
        {img}
      </div>
    );
  }

  return img;
});

AppImage.displayName = 'AppImage';

export default AppImage;
