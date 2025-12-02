import { useCart } from "@/store/cart";
import { List } from "@/components/list/List";
import { Actions } from "@/components/product-list/Actions";
import { useModalStore } from "@/store/useModalStore";
import { Button } from "@/components/button/Button";
import { Empty } from "@/components/empty/Empty";
import { useToastStore } from "@/store/toastStore";

const Cart = () => {
    const { cartItems, clearCart } = useCart();
    const { showModal } = useModalStore();
    const { showToast } = useToastStore();

    const handleConfirmClearCart = () => {
        try {
            clearCart();
            showToast('success', 'Cart cleared successfully');
        } catch (error) {
            showToast('error', 'Failed to clear cart');
        }
    }

    const handleConfirmCheckout = () => {
        try {
            clearCart();
            showToast('success', 'Checkout successful');
        } catch (error) {
            showToast('error', 'Failed to checkout');
        }
    }

    const handleClearCart = () => {
        if (!cartItems?.length) return;
        showModal({
            title: "Clear Cart",
            content: <p>Are you sure you want to clear your cart?</p>,
            onConfirm: () => handleConfirmClearCart(),
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
            onConfirm: () => handleConfirmCheckout(),
            onCancel: () => { },
            confirmText: "Checkout",
            cancelText: "Cancel",
        });
    };

    if (cartItems?.length === 0) return <Empty className="pt-component-lg" message="No items in cart" />;

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 pt-component-lg">
            <List
                title="Your Cart"
                items={cartItems ?? []}
                mapFieldName={{ title: "name", metaDescription: "price", avatar: "image" }}
                actions={(item) => <Actions food={item} />}
                footer={cartItems?.length ? <div className="flex justify-end"><Button onClick={handleClearCart} label="Clear Cart" variant="delete" /></div> : null}
            />
            <h3 className="text-xl font-semibold">Total: {cartItems?.reduce((acc, item) => acc + (item?.price ?? 0) * (item?.quantity ?? 1), 0) ?? 0}</h3>
            <Button onClick={handleCheckout} label="Checkout" variant="add" />

        </div>
    );
};

export default Cart
