import { StarRating } from '../rating/StarRating';

interface Review {
    user: string;
    comment: string;
    rating: number;
}

interface ReviewCardProps {
    review: Review;
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
    return (
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-800">{review.user}</h4>
                <StarRating rating={review.rating} size="sm" />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{review.comment}</p>
        </div>
    );
};
