import { useNavigate } from "react-router-dom";
import type { Food } from "./foot.data";


const FoodListItem = ({food}: {food: Food}) => {
    const navigate = useNavigate();

    const handleOpenDetailsPage = () => {
        navigate(`/food/${food.id}`);
    }
    
  return (
    <div className="flex justify-center items-center border border-gray-300 rounded-lg p-4 bg-white shadow-md cursor-pointer hover:shadow-lg transition-shadow">
        <div className="w-full">
            <h4 className="text-lg font-semibold mb-2 hover:translate-x-1.5 transition-transform" onClick={handleOpenDetailsPage}>{food.name}</h4>
            <p className="text-gray-600 mb-2">{food.category}</p>
            <div className="text-blue-600 font-bold">NRs.{food.price}</div>
        </div>
    </div>
  )
}

export default FoodListItem