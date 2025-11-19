import { useState, useEffect } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import FoodListItem from "./FoodListItem";
import type { Food } from "./foot.data";
import { getProductList } from "../mockDataApi/mockApi";

const FoodList = () => {
    const [filteredFoods, setFilteredFoods] = useState<Food[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const debouncedSearchTerm = useDebounce<string>(searchTerm, 300);

    useEffect(() => {
        getProductList().then((data) => {
            setFilteredFoods(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching product list:", error);
        });
    }, []);

    useEffect(() => {
        if (debouncedSearchTerm) {
            const lowercasedTerm = debouncedSearchTerm.toLowerCase();
            setFilteredFoods((prevFoods) =>
                prevFoods.filter((food) =>
                    food.name.toLowerCase().includes(lowercasedTerm)) ?? []);
        }}, [debouncedSearchTerm]);


    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <section className="max-w-5xl mx-auto p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-semibold mb-4">Menu</h3>
                        <div>
                            <input
                                type="text"
                                placeholder="Search foods..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                     </div>
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                        {filteredFoods.length > 0 ? (
                            filteredFoods.map((food) => (
                                <FoodListItem key={food.id} food={food} />
                            ))
                        ) : (
                            <p>No foods found.</p>
                        )}
                    </div>
                </section>

            )};
        </>
    );
};


export default FoodList;