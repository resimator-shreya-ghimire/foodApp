import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface StarRatingProps {
    rating: number;
    maxRating?: number;
    size?: 'sm' | 'md' | 'lg';
    showNumber?: boolean;
}

export const StarRating = ({
    rating,
    maxRating = 5,
    size = 'md',
    showNumber = false
}: StarRatingProps) => {
    const sizeClasses = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-xl'
    };

    const renderStars = () => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <FontAwesomeIcon
                    key={`full-${i}`}
                    icon={faStar}
                    className="text-yellow-400"
                />
            );
        }

        if (hasHalfStar && fullStars < maxRating) {
            stars.push(
                <FontAwesomeIcon
                    key="half"
                    icon={faStarHalfAlt}
                    className="text-yellow-400"
                />
            );
        }

        const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <FontAwesomeIcon
                    key={`empty-${i}`}
                    icon={faStar}
                    className="text-gray-300"
                />
            );
        }

        return stars;
    };

    return (
        <div className="flex items-center gap-1">
            <div className={`flex gap-1 ${sizeClasses[size]}`}>
                {renderStars()}
            </div>
            {showNumber && (
                <span className="text-gray-600 ml-1 text-sm font-medium">
                    {rating.toFixed(1)}
                </span>
            )}
        </div>
    );
};
