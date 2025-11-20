import { Image } from "../image/Image";

interface CardProps {
  title?: string;
  header?: React.ReactNode | null;
  children?: React.ReactNode | null;
  image?: string;
  category?: string;
  description?: string;
  price?: number;
  className?: string;
  actions?: React.ReactNode | null;
  hoverEffect?: boolean;
  onClick?: () => void;
}

export const Card = ({
  title = "",
  header = null,
  image = "",
  children = null,
  description = "",
  price = 0,
  className = "",
  actions = null,
  hoverEffect = true,
  onClick = () => { }
}: CardProps) => {

  return (
    <div className={`mb-4 ${className}`}>
      <div onClick={onClick} className={`bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden transition ${hoverEffect ? "hover:shadow-lg hover:scale-105 hover:cursor-pointer" : ""}`}>

        {image && (
          <Image
            src={image}
            alt="card-image"
            className="w-full h-48 object-cover"
          />
        )}

        <div className="p-6">
          {header && <div className="mb-4">{header}</div>}
          {title && (
            <h5 className="text-2xl font-semibold text-gray-900 mb-2">
              {title}
            </h5>
          )}
          {description && (
            <p className="text-gray-600 mb-4 leading-relaxed ">
              {description}
            </p>
          )}
          {price > 0 && (
            <p className="text-lg font-medium text-gray-800 mb-4">
              Nrs. {price}
            </p>
          )}
          {children}
          {actions && <div className="mt-4 flex gap-3">{actions}</div>}
        </div>
      </div>
    </div>
  );
};

export default Card;