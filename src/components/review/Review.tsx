import { StarRating } from "@/components/rating/StarRating";
import { ReviewCard } from "@/components/review/ReviewCard";
import type { reviewProps } from "@/pages/FoodDetails";



export const Review = ({ reviews, rating }: reviewProps) => {
    return (
        <div className="max-w-7xl bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Customer Reviews
                </h2>
                <div className="flex items-center gap-3">
                    <StarRating rating={rating} size="md" />
                    <span className="text-gray-600">
                        Based on {reviews?.length ?? 0} {reviews?.length === 1 ? 'review' : 'reviews'}
                    </span>
                </div>
            </div>

            {reviews?.length > 0 ? (
                <div className="grid gap-4 md:grid-cols-2">
                    {reviews?.map((review, index) => (
                        <ReviewCard key={index} review={review} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <p className="text-gray-500 text-lg">No reviews yet. Be the first to review!</p>
                </div>
            )}
        </div>
    )
}
