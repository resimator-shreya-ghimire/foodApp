import { Image } from '@/components/image/Image';
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@/components/icon/Icon";

type CardProps = {
  title?: string;
  header?: React.ReactNode | null;
  children?: React.ReactNode | null;
  image?: string;
  icon?: IconDefinition;
  category?: string;
  description?: string;
  price?: number;
  className?: string;
  actions?: React.ReactNode | null;
  hoverEffect?: boolean;
  onClick?: () => void;
  iconColor?: string;
};

export const Card = ({
  title = '',
  header = null,
  image = '',
  icon,
  iconColor = '',
  children = null,
  description = '',
  price = 0,
  className = '',
  actions = null,
  hoverEffect = true,
  onClick = () => { },
}: CardProps) => {
  return (
    <div className={`mb-4`}>
      <div
        className={`${hoverEffect ? 'hover:shadow-lg hover:scale-105' : ''} ${className}`}
      >
        {image && (
          <Image
            src={image}
            alt="card-image"
            className="w-full h-48 object-cover"
          />
        )}

        {icon && (
          <Icon
            icon={icon}
            className={`text-6xl p-2 ${iconColor}`}
          />
        )}

        <div className="p-6">
          {header && <div className="mb-4">{header}</div>}
          {title && (
            <h5
              className="text-2xl font-semibold text-gray-900 mb-2 hover:cursor-pointer"
              onClick={onClick}
            >
              {title}
            </h5>
          )}
          {description && (
            <p className="text-gray-600 mb-4 leading-relaxed ">{description}</p>
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
