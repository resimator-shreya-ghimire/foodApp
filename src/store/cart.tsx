import { create } from 'zustand';

type CartStates = {
  cartItems: any[];
  addToCart: (item: any) => void;
  removeFromCart: (item: any) => void;
  clearCart: () => void;
  increaseQuantity: (item: any) => void;
  decreaseQuantity: (item: any) => void;
  proceedToCheckout: () => void;
};

export const useCart = create<CartStates>((set) => {
  return {
    cartItems: [],

    addToCart: (item: any) =>
      set((state) => {
        const existingItem = state.cartItems.find((i) => i.id === item.id);
        if (existingItem) {
          return {
            cartItems: state.cartItems.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          };
        }
        return { cartItems: [...state.cartItems, { ...item, quantity: 1 }] };
      }),

    removeFromCart: (item: any) =>
      set((state) => ({
        cartItems: state.cartItems.filter((i) => i.id !== item.id),
      })),

    clearCart: () => set((state) => ({ cartItems: [] })),

    increaseQuantity: (item: any) =>
      set((state) => ({
        cartItems: state.cartItems.map((items) =>
          items.id === item.id
            ? { ...items, quantity: items.quantity + 1 }
            : items
        ),
      })),

    decreaseQuantity: (item: any) =>
      set((state) => ({
        cartItems: state.cartItems
          .map((items) =>
            items.id === item.id
              ? { ...items, quantity: items.quantity - 1 }
              : items
          )
          .filter((items) => items.quantity > 0),
      })),
    proceedToCheckout: () => set((state) => ({ cartItems: [] })),
  };

});
