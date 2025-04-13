import { create } from "zustand";
import { persist } from "zustand/middleware";
import { allProducts } from "@/lib/products"; // ou depuis un service/endpoint si tu veux aller plus loin
import { getProductById } from "@/lib/services/productServices";

interface Item {
  id: number;
  quantity: number;
}

interface CartStore {
  carts: Item[];
  addToCart: (productId: number, quantityToAdd: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  getTotalCost: () => Promise<number>;
}

const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      carts: [],

      addToCart: (productId: number, quantityToAdd: number) =>
        set((state) => {
          const existingItem = state.carts.find((item) => item.id === productId);

          if (existingItem) {
            return {
              carts: state.carts.map((item) =>
                item.id === productId
                  ? { ...item, quantity: item.quantity + quantityToAdd }
                  : item
              ),
            };
          }

          return {
            carts: [...state.carts, { id: productId, quantity: quantityToAdd }],
          };
        }),

      removeFromCart: (id: number) =>
        set((state) => ({
          carts: state.carts.filter((item) => item.id !== id),
        })),

      clearCart: () => set({ carts: [] }),

      increaseQuantity: (id: number) =>
        set((state) => ({
          carts: state.carts.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        })),

      decreaseQuantity: (id: number) =>
        set((state) => ({
          carts: state.carts
            .map((item) =>
              item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter((item) => item.quantity > 0),
        })),

        getTotalCost: async () => {
            const { carts } = get();
            let total = 0;
          
            for (const item of carts) {
              try {
                const product = await getProductById(item.id);
                total += product.price * item.quantity;
              } catch (error) {
                console.error(`Erreur lors de la récupération du produit ${item.id} :`, error);
              }
            }
          
            return total;
          }
    }),
    {
      name: "cart-storage",
    }
  )
);

export default useCartStore;
