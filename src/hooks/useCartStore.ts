import { create } from "zustand";
import { supabase } from "@/utils/supabase/client";

type CartItem = {
  id: string;
  title: string;
  img?: string;
  price: number;
  quantity: number;
};

type CartStore = {
  cart: CartItem[];
  counter: number;
  isLoading: boolean;
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  counter: 0,
  isLoading: false,

  addItem: async (item) => {
    set((state) => ({
      cart: [...state.cart, item],
      counter: state.counter + 1,
    }));
  },

  removeItem: async (itemId) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== itemId),
      counter: state.counter - 1,
    }));
  },
}));
