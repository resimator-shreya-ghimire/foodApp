import { Button } from '../button/Button';
import { useCart } from '../../store/cart';

export const Actions = ({ food }: { food?: any }) => {
    const { addToCart, increaseQuantity, decreaseQuantity, cartItems } =
        useCart();

    const cartItem = cartItems.find((item: any) => item.id === food.id);
    const quantity = cartItem ? cartItem.quantity : 0;

    return quantity > 0 ? (
        <div key={food.id} className="w-50% flex items-center gap-2">
            <Button
                label="-"
                variant="delete"
                onClick={() => decreaseQuantity(food)}
            />
            <span className="font-semibold text-gray-700">{quantity}</span>
            <Button label="+" variant="add" onClick={() => increaseQuantity(food)} />
        </div>
    ) : (
        <Button
            key={food.id}
            label="Add"
            variant="add"
            onClick={() => addToCart({ ...food, quantity: 1 })}
        />
    );
};
