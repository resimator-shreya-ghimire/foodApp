import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Image } from '../image/Image';

interface IconProps {
    icon?: IconDefinition;
    src?: string;
    alt?: string;
    className?: string;
    title?: string;
    onClick?: () => void;
}

export const Icon = ({ icon, src, alt = '', className = '', onClick, title }: IconProps) => {
    const hoverClass = 'hover:scale-110 transition-transform';
    if (icon) {
        return <FontAwesomeIcon icon={icon} className={`${hoverClass} ${className}`} onClick={onClick} title={title} />;
    }
    return (
        <Image
            src={src}
            alt={alt}
            className={`${hoverClass} ${className}`}
            onClick={onClick}
            title={title}
        />
    );
};
