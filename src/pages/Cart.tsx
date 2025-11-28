import { useCart } from "@/store/cart";
import { List } from "@/components/list/List";
import { Actions } from "@/components/product-list/Actions";

const Cart = () => {
    const { cartItems, clearCart } = useCart();

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <List
                title="Your Cart"
                items={cartItems ?? []}
                mapFieldName={{ title: "name", metaDescription: "price", avatar: "image" }}
                actions={(item) => <Actions food={item} />}
                footer={<div className="flex justify-end"><button onClick={clearCart} className="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors">Clear Cart</button></div>}
            />
        </div>
    );
};

export default Cart
