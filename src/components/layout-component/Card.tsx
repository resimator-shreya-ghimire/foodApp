import type { CardProps } from "./layout.data";

const Card: React.FC<CardProps> = ({
   Title = "",
   header = null,
   image = "",
   children = null,
   description = "",
   price = 0,
   className = "",
   actions = null,
   hoverEffect = true,
   onClick = () => {}
}) => {

   return (
        <div className={`mb-4 ${className}`}>
      <div onClick={onClick} className={`bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden transition ${hoverEffect ? "hover:shadow-lg hover:scale-105 hover:cursor-pointer" : ""}`}>
        
        {image && (
          <img
            src={image}
            alt="card-image"
            className="w-full h-48 object-cover"
          />
        )}

        <div className="p-6">
          {header && <div className="mb-4">{header}</div>}
          {Title && (
            <h5 className="text-2xl font-semibold text-gray-900 mb-2">
              {Title}
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
          {children && <div className="mb-4">{children}</div>}
          {actions && <div className="mt-4 flex gap-3">{actions}</div>}
        </div>
      </div>
    </div>
   );
};

export default Card;