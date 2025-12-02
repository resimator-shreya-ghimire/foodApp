import { useSearchParams } from 'react-router-dom';
import type { FoodData } from '@/components/product-list/FoodList';

export function useSearch(params?: { value?: string }) {
  const [searchParams, setSearchParams] = useSearchParams() ?? params?.value;

  const query = searchParams.get('q')?.toLowerCase() || '';

  const filtered = (data: FoodData[], searchKey: keyof FoodData) => {
    return data.filter((item) =>
      item[searchKey]?.toString()?.toLowerCase()?.includes(query)
    );
  };

  const updateQuery = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value === '') params.delete('q');
    params.set('q', value);
    setSearchParams(params);
  };

  return {
    query,
    updateQuery,
    filtered,
  };
}
