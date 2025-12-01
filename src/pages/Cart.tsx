import { useCart } from "@/store/cart";
import { List } from "@/components/list/List";
import { Actions } from "@/components/product-list/Actions";
import { useModalStore } from "@/store/useModalStore";
import { Button } from "@/components/button/Button";
import { Empty } from "@/components/empty/Empty";
import { Image } from "@/components/image/Image";

const Cart = () => {
    const { cartItems, clearCart } = useCart();
    const { showModal } = useModalStore();

    const handleClearCart = () => {
        if (!cartItems?.length) return;
        showModal({
            title: "Clear Cart",
            content: <p>Are you sure you want to clear your cart?</p>,
            onConfirm: clearCart,
            onCancel: () => { },
            confirmText: "Clear",
            cancelText: "Cancel",
        });
    };

    const handleCheckout = () => {
        if (!cartItems?.length) return;
        showModal({
            title: "Checkout",
            content: <p>Are you sure you want to checkout?</p>,
            onConfirm: clearCart,
            onCancel: () => { },
            confirmText: "Checkout",
            cancelText: "Cancel",
        });
    };

    if (cartItems?.length === 0) return <Empty message="No items in cart" />;

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <List
                title="Your Cart"
                items={cartItems ?? []}
                mapFieldName={{ title: "name", metaDescription: "price", avatar: "image" }}
                // itemsRenderer={(items) => items.map((item) => (
                //     <div className="flex items-center gap-4">
                //         <Image src={item?.image ?? ""} alt={item?.name ?? ""} className="w-16 h-16 object-cover" />
                //         <div className="">
                //             <h3 className="text-lg font-semibold">{item?.name}</h3>
                //             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem sint, delectus enim adipisci laboriosam dignissimos?
                //         </div>
                //         <Actions food={item} />
                //     </div>
                // ))}
                actions={(item) => <Actions food={item} />}
                footer={cartItems?.length ? <div className="flex justify-end"><Button onClick={handleClearCart} label="Clear Cart" variant="delete" /></div> : null}
            />
            <h3 className="text-xl font-semibold">Total: {cartItems?.reduce((acc, item) => acc + (item?.price ?? 0) * (item?.quantity ?? 1), 0) ?? 0}</h3>
            <Button onClick={handleCheckout} label="Checkout" variant="add" />

        </div>
    );
};

export default Cart
