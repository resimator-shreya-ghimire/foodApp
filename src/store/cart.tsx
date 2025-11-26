import { create } from 'zustand';
import type { FoodData } from '@/components/product-list/FoodList';

type CartStates = {
  cartItems: FoodData[];
  cartCount: number;
  addToCart: (item: FoodData) => void;
  removeFromCart: (item: FoodData) => void;
  clearCart: () => void;
  increaseQuantity: (item: FoodData) => void;
  decreaseQuantity: (item: FoodData) => void;
  proceedToCheckout: () => void;
};

export const useCart = create<CartStates>((set) => {
  return {
    cartItems: [],
    cartCount: Number(localStorage.getItem('cartCount') ?? '0'),

    addToCart: (item: FoodData) =>
      set((state) => {
        const existingItem = state.cartItems.find((i) => i.id === item.id);
        const newCount = state.cartCount + 1;
        localStorage.setItem('cartCount', String(newCount));

        if (existingItem) {
          return {
            cartItems: state.cartItems.map((i) =>
              i.id === item.id ? { ...i, quantity: (i.quantity ?? 0) + 1 } : i
            ),
            cartCount: newCount,
          };
        }
        return {
          cartItems: [...state.cartItems, { ...item, quantity: 1 }],
          cartCount: newCount,
        };
      }),

    removeFromCart: (item: FoodData) =>
      set((state) => {
        const itemToRemove = state.cartItems.find((i) => i.id === item.id);
        const newCartItems = state.cartItems.filter((i) => i.id !== item.id);
        const newCount = state.cartCount - (itemToRemove?.quantity ?? 0);
        localStorage.setItem('cartCount', String(newCount));

        return {
          cartItems: newCartItems,
          cartCount: newCount,
        };
      }),

    clearCart: () =>
      set(() => {
        localStorage.setItem('cartCount', '0');
        return {
          cartItems: [],
          cartCount: 0,
        };
      }),

    increaseQuantity: (item: FoodData) =>
      set((state) => {
        const newCount = state.cartCount + 1;
        localStorage.setItem('cartCount', String(newCount));

        return {
          cartItems: state.cartItems.map((items) =>
            items.id === item.id
              ? { ...items, quantity: (items.quantity ?? 0) + 1 }
              : items
          ),
          cartCount: newCount,
        };
      }),

    decreaseQuantity: (item: FoodData) =>
      set((state) => {
        const newCount = state.cartCount - 1;
        localStorage.setItem('cartCount', String(newCount));

        return {
          cartItems: state.cartItems
            .map((items) =>
              items.id === item.id
                ? { ...items, quantity: (items.quantity ?? 0) - 1 }
                : items
            )
            .filter((items) => (items.quantity ?? 0) > 0),
          cartCount: newCount,
        };
      }),

    proceedToCheckout: () =>
      set(() => {
        localStorage.setItem('cartCount', '0');
        return {
          cartItems: [],
          cartCount: 0,
        };
      }),
  };
});
