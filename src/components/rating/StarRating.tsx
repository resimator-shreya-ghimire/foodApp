import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface StarRatingProps {
    rating: number;
    maxRating?: number;
    size?: "sm" | "md" | "lg";
    showNumber?: boolean;
}

export const StarRating = ({
    rating,
    maxRating = 5,
    size = "md",
    showNumber = false,
}: StarRatingProps) => {
    const sizeClasses = {
        sm: "text-sm",
        md: "text-base",
        lg: "text-xl",
    };

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
        <div className="flex items-center gap-1">
            <div className={`flex gap-1 ${sizeClasses[size]}`}>
                {Array.from({ length: maxRating }).map((_, index) => {
                    const position = index + 1;
                    return (
                        <FontAwesomeIcon
                            key={position}
                            icon={position <= fullStars ? faStar : position === fullStars + 1 && hasHalfStar ? faStarHalfAlt : faStar}
                            className={position <= fullStars || position === fullStars + 1 && hasHalfStar ? "text-yellow-400" : "text-gray-400"}
                        />
                    );
                })}
            </div>

            {showNumber && (
                <span className="text-gray-600 ml-1 text-sm font-medium">
                    {rating.toFixed(1)}
                </span>
            )}
        </div>
    );
};
