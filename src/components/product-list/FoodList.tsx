import { useRef } from 'react';
import { useSearch } from '@/hooks/useSearch';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import Card from '@/components/card/Card';
import { useNavigate } from 'react-router-dom';
import ListHeader from '@/components/product-list/ListHeader';
import { Actions } from '@/components/product-list/Actions';
import { useProductList } from '@/utils/query';

export type FoodData = {
  id?: string;
  name?: string;
  category?: string;
  quantity?: number;
  price?: number;
  isVegetarian?: boolean;
  description?: string;
  image?: string;
};

export const FoodList = () => {
  const navigate = useNavigate();
  const { query, filtered } = useSearch();

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useProductList();

  const foods = data?.pages.flatMap((page) => page?.items) ?? [];

  useInfiniteScroll({
    ref: loadMoreRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage && !isFetchingNextPage,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading foods</p>;
  const filteredData = query ? filtered(foods, 'name') : foods;

  const handleCardClick = (id: string | undefined) => {
    if (!id) return;
    navigate(`/food/${id}`);
  };

  return (
    <section className="max-w-5xl mx-auto p-6">
      <ListHeader />
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {filteredData.map((food) => (
          <Card
            key={food?.id}
            title={food?.name}
            image={food?.image}
            description={food?.description}
            price={food?.price}
            onClick={() => handleCardClick(food?.id)}
            actions={<Actions key={food?.id} food={food} />}
          />
        ))}
      </div>

      <div ref={loadMoreRef} className="h-10"></div>

      {isFetchingNextPage && <p>Loading more...</p>}
    </section>
  );
};
