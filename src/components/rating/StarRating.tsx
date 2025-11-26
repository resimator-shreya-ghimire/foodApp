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
    size = 'md',
    showNumber = false
}: StarRatingProps) => {
    const sizeClasses = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-xl'
    };

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    const stars = () => {
        const starsArray: React.ReactNode[] = [];
        for (let i = 1; i <= 5; i++) {
            let starType = i <= fullStars ? 'full' : i === fullStars + 1 && hasHalfStar ? 'half' : 'empty';
            starsArray.push(
                <FontAwesomeIcon
                    key={i}
                    icon={starType === 'full' ? faStar : starType === 'half' ? faStarHalfAlt : faStar}
                    className={starType === 'empty' ? 'text-gray-400' : 'text-yellow-400'}
                />
            )
        }
        return starsArray;
    }


    return (
        <div className="flex items-center gap-1">
            <div className={`flex gap-1 ${sizeClasses?.[size] ?? 'text-base'}`}>
                {
                    stars()
                }
            </div>
            {showNumber && (
                <span className="text-gray-600 ml-1 text-sm font-medium">
                    {rating?.toFixed(1) ?? '0.0'}
                </span>
            )}
        </div>
    );
};
