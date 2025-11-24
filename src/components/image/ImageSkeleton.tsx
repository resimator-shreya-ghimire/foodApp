export function ImageSkeleton({ className = '' }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="Loading image"
      className={`w-full h-48 rounded-md bg-gray-200 dark:bg-gray-700 overflow-hidden ${className}`}
    >
      <div className="w-full h-full animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700" />
    </div>
  );
}

export default ImageSkeleton;
