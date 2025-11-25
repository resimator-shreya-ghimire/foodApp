import { useEffect, useRef, useState } from 'react';
import { useLazyLoadingImage } from '../../hooks/useLazyLoadingImage';
import ImageSkeleton from './ImageSkeleton';

export function Image({
  src,
  placeholder = '',
  alt,
  className,
}: {
  src?: string;
  placeholder?: string;
  alt?: string;
  className?: string;
}) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [shouldLoadImage, setShouldLoadImage] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const { shouldLoad } = useLazyLoadingImage(wrapperRef, {
    rootMargin: '1px',
  });

  useEffect(() => {
    if (shouldLoad) setShouldLoadImage(true);
  }, [shouldLoad]);

  useEffect(() => {
    if (shouldLoadImage && imgRef.current) {
      const imgElement = imgRef.current;
      if (src && src !== placeholder) {
        imgElement.src = src;
      }
    }
  }, [shouldLoadImage, src, placeholder]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div ref={wrapperRef} className={className}>
      {!shouldLoadImage ? (
        <ImageSkeleton />
      ) : (
        <img
          ref={imgRef}
          className={`${className} ${!imageLoaded ? 'blur' : ''} transition-all duration-300`}
          src={placeholder || src}
          alt={alt}
          loading="lazy"
          onLoad={handleImageLoad}
        />
      )}
    </div>
  );
}
