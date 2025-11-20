import { useEffect, useRef, useState } from "react";
import useLazyLoadingOnIntersection from "../../Hooks/useLazyLoadingOnIntersection";
import ImageSkeleton from "./ImageSkeleton";

export function Image({
  src,
  placeholder = "",
  alt,
  className,
}: {
  src?: string;
  placeholder?: string;
  alt?: string;
  className?: string;
}) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoadImage, setShouldLoadImage] = useState(false);

  const { shouldLoad } = useLazyLoadingOnIntersection(wrapperRef, {
    rootMargin: "1px",
  });

  useEffect(() => {
    if (shouldLoad) setShouldLoadImage(true);
  }, [shouldLoad]);

  return (
    <div ref={wrapperRef} className={className}>
      {!shouldLoadImage ? (
        <ImageSkeleton />
      ) : (
        <img className={className} src={src || placeholder} alt={alt} loading="lazy" />
      )}
    </div>
  );
}
