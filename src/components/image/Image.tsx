import { useEffect, useRef, useState } from 'react';
import { useLazyLoadingOnIntersection } from '@/hooks/useLazyLoadingOnIntersection';
import ImageSkeleton from '@/components/image/ImageSkeleton';

export function Image({
  src,
  placeholder = '',
  alt,
  className,
  onClick,
  title,
}: {
  src?: string;
  placeholder?: string;
  alt?: string;
  className?: string;
  onClick?: () => void;
  title?: string;
}) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [shouldLoadImage, setShouldLoadImage] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const { shouldLoad } = useLazyLoadingOnIntersection(wrapperRef, {
    rootMargin: '1px',
  });

  useEffect(() => {
    if (shouldLoad) setShouldLoadImage(true);
  }, [shouldLoad]);

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
          title={title}
          loading="lazy"
          onLoad={handleImageLoad}
          onClick={onClick}
        />
      )}
    </div>
  );
}
