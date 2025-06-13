import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void; // New function to decrease quantity
  clearCart: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          const existing = state.items.find((i) => i.id === item.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
              ),
            };
          }
          return { items: [...state.items, item] };
        }),
      removeItem: (id) =>
        set((state) => {
          const existing = state.items.find((i) => i.id === id);
          if (existing && existing.quantity > 1) {
            return {
              items: state.items.map((i) =>
                i.id === id ? { ...i, quantity: i.quantity - 1 } : i
              ),
            };
          } else if (existing && existing.quantity === 1) {
            return { items: state.items.filter((i) => i.id !== id) };
          }
          return state;
        }),
        
        clearCart: () => set((state) => {
            return { items: [] };
        })
    }),
    { name: 'cart' }
  )
);