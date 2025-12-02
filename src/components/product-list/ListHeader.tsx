import { useState, useEffect } from 'react';
import { Input } from '@/components/input/Input';
import { useSearch } from '@/hooks/useSearch';
import { useDebounce } from '@/hooks/useDebounce';

const ListHeader = () => {
    const { query, updateQuery } = useSearch();

    const [searchTerm, setSearchTerm] = useState(query ?? '');
    const debouncedSearchTerm = useDebounce<string>(searchTerm, 300);

    const handleOnClear = () => {
        setSearchTerm('');
        updateQuery('');
    };

    useEffect(() => {
        if (debouncedSearchTerm) updateQuery(debouncedSearchTerm);
    }, [debouncedSearchTerm]);

    return (
        <>
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
        </>
    );
};

export default ListHeader;
