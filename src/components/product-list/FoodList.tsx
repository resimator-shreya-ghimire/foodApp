import { useState, useEffect, useRef } from 'react';
import { useDebounce } from '../../Hooks/useDebounce';
import { useSearch } from '../../Hooks/useSearch';
import Card from '../card/Card';
import { getProductList } from '../../api/mockapi';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useLazyLoadingOnIntersection } from '../../Hooks/useLazyLoadingOnIntersection'
import { Button } from '../button/Button';
import { Input } from '../input/Input';

export const FoodList = () => {
  const navigate = useNavigate();
  const { query, updateQuery, filtered } = useSearch();

  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const { shouldLoad } = useLazyLoadingOnIntersection(loadMoreRef, {
    rootMargin: '10px',
  });

  const [searchTerm, setSearchTerm] = useState(query ?? '');
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 300);

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['foods'],
    queryFn: ({ pageParam = 1 }) => getProductList({ pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  const foods = data?.pages.flatMap(page => page.items) ?? [];

  useEffect(() => {
    if (debouncedSearchTerm) updateQuery(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (!loadMoreRef.current) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    });

    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading foods</p>;
  const filteredData = query ? filtered(foods, 'name') : foods;

  const actions = () => (
    <Button label="Add to Cart" variant="add" onClick={() => { }} />
  );

  const handleCardClick = (id: number) => {
    navigate(`/food/${id}`);
  };

  const handleOnClear = () => {
    setSearchTerm('');
    updateQuery('');
  };

  return (
    <section className="max-w-5xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold mb-4">Menu</h3>
        <Input
          type="text"
          value={searchTerm}
          placeholder="Search foods..."
          onChange={(e) => setSearchTerm(e)}
          onClear={handleOnClear}
          isSearch={true}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {filteredData.map((food) => (
          <Card
            key={food.id}
            title={food.name}
            image={food.image}
            description={food.description}
            price={food.price}
            onClick={() => handleCardClick(food.id)}
            actions={actions()}
          />
        ))}
      </div>

      <div ref={loadMoreRef} className="yellow h-10"></div>

      {isFetchingNextPage && <p>Loading more...</p>}
    </section>
  );
};
