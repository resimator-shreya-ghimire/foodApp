import { useSearchParams } from 'react-router-dom';

export function useSearch<T extends { [key: string]: any }>() {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('q')?.toLowerCase() || '';

  const filtered = (data: T[], searchKey: string) => {
    return data.filter((item) =>
      item[searchKey]?.toLowerCase().includes(query)
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
