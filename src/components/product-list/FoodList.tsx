import { useState, useEffect } from "react";
import { useDebounce } from "../../Hooks/useDebounce";
import Card from "../card/Card";
import { getProductList } from "../../api/mockapi";
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from "react-router-dom";
import { Button } from "../button/Button";
import { InputField } from "../input/InputField";

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

    const [filteredFoods, setFilteredFoods] = useState<Food[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const debouncedSearchTerm = useDebounce<string>(searchTerm, 300);

    const { data, error, isLoading } = useQuery<Food[], Error>({ queryKey: ['foods'], queryFn: getProductList });

    useEffect(() => {
        if (!data) {
            setFilteredFoods([]);
            return;
        }
        const term = debouncedSearchTerm?.trim().toLowerCase();
        if (!term) {
            setFilteredFoods(data);
            return;
        }
        setFilteredFoods(data.filter((f) => f.name.toLowerCase().includes(term)));
    }, [data, debouncedSearchTerm]);

    const actions = () => {
        return <Button label="Add to Cart" variant="add" onClick={() => { }} />
    }

    const handleCardClick = (id: number) => {
        navigate(`/food/${id}`);
    }

    useEffect(() => {
        if (debouncedSearchTerm) {
            const lowercasedTerm = debouncedSearchTerm.toLowerCase();
            setFilteredFoods((prevFoods) =>
                prevFoods.filter((food) =>
                    food.name.toLowerCase().includes(lowercasedTerm)) ?? []);
        }
    }, [debouncedSearchTerm]);

    if (isLoading) return <p>Loading...</p>;
    if (!filteredFoods?.length || error) return <p>No records found</p>;

    return (
        <section className="max-w-5xl mx-auto p-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold mb-4">Menu</h3>
                <div>
                    <InputField
                        fieldname="text"
                        placeholder="Search foods..."
                        isSearch
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {filteredFoods?.map((food) => (
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
