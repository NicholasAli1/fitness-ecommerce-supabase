import { create } from "zustand";
import { supabase } from '@/lib/supabaseClient';

type CartState = {
  cart: any[]; // Define a more specific type if your cart structure is known
  isLoading: boolean;
  counter: number;
  getCart: () => void;
  addItem: (productId: string, variantId: string, quantity: number) => void;
  removeItem: (itemId: string) => void;
};

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  isLoading: true,
  counter: 0,

  getCart: async () => {
    set((state) => ({ ...state, isLoading: true }));
    try {
      const { data: cartData, error } = await supabase
        .from("cart")
        .select("id, line_items(*)");

      if (error) {
        console.error("Error fetching cart:", error.message);
        set((state) => ({ ...state, isLoading: false }));
        return;
      }

      set({
        cart: cartData || [],
        counter: cartData?.[0]?.line_items?.length || 0,
        isLoading: false,
      });
    } catch (err) {
      console.error("Error fetching cart:", err);
      set((state) => ({ ...state, isLoading: false }));
    }
  },

  addItem: async (productId, variantId, quantity) => {
    set((state) => ({ ...state, isLoading: true }));
    try {
      const { data: cartItem, error } = await supabase
        .from("line_items")
        .insert([
          {
            product_id: productId,
            variant_id: variantId,
            quantity,
            cart_id: 1, // Update with dynamic cart ID if necessary
          },
        ])
        .select();

      if (error) {
        console.error("Error adding item to cart:", error.message);
        set((state) => ({ ...state, isLoading: false }));
        return;
      }

      const { data: updatedCart, error: cartError } = await supabase
        .from("cart")
        .select("id, line_items(*)")
        .eq("id", 1); // Update with dynamic cart ID if necessary

      if (cartError) {
        console.error("Error updating cart:", cartError.message);
        set((state) => ({ ...state, isLoading: false }));
        return;
      }

      set({
        cart: updatedCart || [],
        counter: updatedCart?.[0]?.line_items?.length || 0,
        isLoading: false,
      });
    } catch (err) {
      console.error("Error adding item:", err);
      set((state) => ({ ...state, isLoading: false }));
    }
  },

  removeItem: async (itemId) => {
    set((state) => ({ ...state, isLoading: true }));
    try {
      const { error } = await supabase
        .from("line_items")
        .delete()
        .eq("id", itemId);

      if (error) {
        console.error("Error removing item from cart:", error.message);
        set((state) => ({ ...state, isLoading: false }));
        return;
      }

      const { data: updatedCart, error: cartError } = await supabase
        .from("cart")
        .select("id, line_items(*)")
        .eq("id", 1); // Update with dynamic cart ID if necessary

      if (cartError) {
        console.error("Error updating cart:", cartError.message);
        set((state) => ({ ...state, isLoading: false }));
        return;
      }

      set({
        cart: updatedCart || [],
        counter: updatedCart?.[0]?.line_items?.length || 0,
        isLoading: false,
      });
    } catch (err) {
      console.error("Error removing item:", err);
      set((state) => ({ ...state, isLoading: false }));
    }
  },
}));
