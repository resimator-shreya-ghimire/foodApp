import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Image } from '../image/Image';

type SizeOption = 'sm' | 'md' | 'lg' | number;

interface IconProps {
    icon?: IconDefinition;
    src?: string;
    alt?: string;
    size?: SizeOption;
    className?: string;
}

export const Icon: React.FC<IconProps> = ({ icon, src, alt = '', size = 'md', className = '' }) => {
    const sizeClass = (() => {
        if (typeof size === 'number') {
            return `w-[${size}px] h-[${size}px]`;
        }
        switch (size) {
            case 'sm':
                return 'w-4 h-4';
            case 'lg':
                return 'w-12 h-12';
            case 'md':
            default:
                return 'w-6 h-6';
        }
    })();

    const hoverClass = 'hover:scale-110 transition-transform';

    if (icon) {
        return <FontAwesomeIcon icon={icon} className={`${sizeClass} ${hoverClass} ${className}`} />;
    }

    return (
        <Image
            src={src}
            alt={alt}
            className={`${sizeClass} ${hoverClass} ${className}`}
        />
    );
};
