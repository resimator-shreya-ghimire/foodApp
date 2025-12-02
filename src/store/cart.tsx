import { create } from 'zustand';
import type { FoodData } from '@/components/product-list/FoodList';
import { persist, createJSONStorage } from 'zustand/middleware';

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

export const useCart = create<CartStates>()(
  persist(
    (set, get) => ({
      cartItems: [],
      cartCount: Number(localStorage.getItem('cartCount') ?? '0'),

      addToCart: (item: FoodData) =>
        set((state) => {
          const existingItem = state.cartItems.find((i) => i.id === item.id);
          const newCount = state.cartCount + 1;

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
          const quantityRemoved = itemToRemove?.quantity ?? 0;

          return {
            cartItems: newCartItems,
            cartCount: state.cartCount - quantityRemoved,
          };
        }),

      clearCart: () =>
        set(() => ({
          cartItems: [],
          cartCount: 0,
        })),

      increaseQuantity: (item: FoodData) =>
        set((state) => ({
          cartItems: state.cartItems.map((items) =>
            items.id === item.id
              ? { ...items, quantity: (items.quantity ?? 0) + 1 }
              : items
          ),
          cartCount: state.cartCount + 1,
        })),

      decreaseQuantity: (item: FoodData) =>
        set((state) => {
          const updatedItems = state.cartItems
            .map((items) =>
              items.id === item.id
                ? { ...items, quantity: (items.quantity ?? 0) - 1 }
                : items
            )
            .filter((items) => (items.quantity ?? 0) > 0);

          return {
            cartItems: updatedItems,
            cartCount: state.cartCount - 1,
          };
        }),

      proceedToCheckout: () =>
        set(() => ({
          cartItems: [],
          cartCount: 0,
        })),

      getCartCount: () => {
        const { cartItems } = get();
        return cartItems.reduce((count, item) => count + (item.quantity ?? 0), 0);
      },
    }),
    {
      name: 'cart',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
