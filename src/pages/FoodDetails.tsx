
import { useParams } from 'react-router-dom';
import { Image } from '../components/image/Image';
import { getProductById } from '../api/mockapi';
import { useQuery } from '@tanstack/react-query';
import type { FoodData } from '../components/product-list/FoodList';
import { StarRating } from '../components/rating/StarRating';
import { useToastStore } from '../store/toastStore';
import { Review } from '../components/review/Review';
import { Banner } from '../components/banner/Banner';
import { Actions } from '../components/product-list/Actions';

export type reviewProps = {
  reviews: Array<{
    user: string;
    comment: string;
    rating: number;
  }>;
  rating: number;
}

interface FoodDetailsData extends FoodData, reviewProps { }

const FoodDetails = () => {
  const { id } = useParams();
  const { showToast } = useToastStore();

  const { data, isPending, error } = useQuery<FoodDetailsData>({
    queryKey: ['product', id],
    queryFn: () => getProductById(Number(id)),
  });

  if (isPending) {
    return (
      <div>Loading...</div>
    );
  }

  if (error) {
    showToast('error', 'Error fetching product details');
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600 text-lg">Error loading product details</div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Banner className='bg-white rounded-2xl shadow-xl overflow-hidden mb-8'>
          <Banner.Item className='w-1/2 relative'>
            <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 shadow-lg p-sm">
              <Image
                src={data.image}
                alt={data.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {data.isVegetarian && (
              <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Vegetarian
              </div>
            )}
          </Banner.Item>
          <Banner.Item>
            <div className="flex flex-col justify-between">
              <div>
                <div className="mb-2">
                  <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {data.category}
                  </span>
                </div>

                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {data.name}
                </h1>

                <div className="flex items-center gap-3 mb-6">
                  <StarRating rating={data.rating} size="lg" showNumber />
                  <span className="text-gray-500 text-sm">
                    ({data.reviews.length} {data.reviews.length === 1 ? 'review' : 'reviews'})
                  </span>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {data.description}
                </p>

                <div className="mb-8">
                  <div className="text-4xl font-bold text-purple-600">
                    Nrs. {(data.price)}
                  </div>
                  <p className="text-gray-500 text-sm mt-1">Inclusive of all taxes</p>
                </div>
                <Actions food={data} />
              </div>
            </div>
          </Banner.Item>
        </Banner>
        <Review reviews={data.reviews} rating={data.rating} />
      </div>


    </div>
  );
};

export default FoodDetails;
