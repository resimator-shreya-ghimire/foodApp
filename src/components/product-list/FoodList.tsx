import { useState, useEffect } from "react";
import { useDebounce } from "../../Hooks/useDebounce";
import { useSearch } from "../../Hooks/useSearch";
import Card from "../card/Card";
import { getProductList } from "../../api/mockapi";
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from "react-router-dom";
import { Button } from "../button/Button";
import { Input } from "../input/Input";

type Food = {
    id: number;
    name: string;
    category: string;
    price: number;
    isVegetarian: boolean;
    image: string;
    description: string;
};

export const FoodList = () => {
    const navigate = useNavigate();
    const { query, updateQuery, filtered }= useSearch();

    const [searcTerm, setSearchTerm]=useState(query ?? '');
    const debouncedSearchTerm = useDebounce<string>(searcTerm, 300);

    const { data, error, isLoading } = useQuery<Food[], Error>({ queryKey: ['foods'], queryFn: getProductList });

    const actions = () => {
        return <Button label="Add to Cart" variant="add" onClick={() => { }} />
    }

    const handleCardClick = (id: number) => {
        navigate(`/food/${id}`);
    }
    
    const handleOnClear=()=>{
        setSearchTerm('');
        updateQuery('');
    }

    useEffect(() => {
        if (debouncedSearchTerm) {
           updateQuery(debouncedSearchTerm);
        }
    }, [debouncedSearchTerm]);

    if (isLoading) return <p>Loading...</p>;
    if (!data?.length || error) return <p>No records found</p>;
    const filteredData= query ?  filtered(data, 'name') : data;

    return (
        <section className="max-w-5xl mx-auto p-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold mb-4">Menu</h3>
                <div>
                    <Input
                        type="text"
                        value={searcTerm}
                        placeholder="Search foods..."
                        onChange={(e)=>setSearchTerm(e)}
                        onClear={handleOnClear}
                        isSearch={true}
                    />
                </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {filteredData?.map((food) => (
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
        </section>
    );
};
