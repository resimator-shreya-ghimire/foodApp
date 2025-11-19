import { useState, useEffect, useRef } from "react";
import SomeData from "./SomeData.json";
import FoodListItem from "./FoodListItem";
import type { Food } from "./foot.data";

const FoodList = () => {
    const [filteredFoods, setFilteredFoods] = useState<Food[]>([]);
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        const fetchData = async () => {
            return SomeData as unknown as Food[];
        }
        fetchData().then((data) => {
            setFilteredFoods(data);
            setLoading(false);
        })

         return () => {
            if (searchTimer.current) {
                window.clearTimeout(searchTimer.current);
            }
        };
    }, []);
    const searchTimer = useRef<number | null>(null);

    const handleSearchItems = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = event.target.value.toLowerCase();

        if (searchTimer.current) {
            window.clearTimeout(searchTimer.current);
        }

        searchTimer.current = window.setTimeout(() => {
            const filtered = (SomeData as unknown as Food[]).filter((food) =>
                food.name.toLowerCase().includes(searchTerm) ||
                food.category.toLowerCase().includes(searchTerm)
            );
            setFilteredFoods(filtered as unknown as Food[]);
        }, 300);
    };


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
                                onChange={handleSearchItems}
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