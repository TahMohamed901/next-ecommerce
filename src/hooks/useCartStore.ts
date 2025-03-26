import { create } from "zustand";
import { persist } from "zustand/middleware";
import { allProducts } from '@/lib/products';
// Interface pour un produit dans le panier
// interface Product {
//     id: string;
//     name: string;
//     price: number;
//     quantity: number;
//     imageUrl?: string; // Optionnel
// }
// interface Product {
//     id: string;
//     name: string;
//     price: number;
//     quantity: number;
//     description: string;
//     images: string;
// }
interface Item{
    id:string;
    price:number
    quantity:number;
    stock:number;
}

// Interface pour le store du panier Zustand
interface CartStore {
    carts: Item[];

    // addToCart: (product: Product) => void;
    addToCart: (productId: string,quantityToAdd: number) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
    increaseQuantity: (id: string) => void;
    decreaseQuantity: (id: string) => void;
    getTotalCost: () => number;
}

const useCartStore = create<CartStore>()(
persist(
    (set, get) => ({
    carts: [],

    // addToCart: (productId: string) => set((state) => {
    //     const existingItem = state.carts.find((item) => item.id === productId);
    //     const product = allProducts.data.find(p => p.id === productId) ?? null;
    //     if (existingItem) {
    //         console.log(state)
    //         return {
    //             carts: state.carts.map((item) =>
    //                 item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    //             ),
    //         };
    //     }
    //     console.log(state)
    //     return product?.id ? { carts: [...state.carts, { id: productId,price:product?.price, quantity: 1 ,stock:4}] } : state;
    // }),
    addToCart: (productId: string, quantityToAdd: number) => set((state) => {
        const existingItem = state.carts.find((item) => item.id === productId);
        const product = allProducts.data.find(p => p.id === productId) ?? null;
    
        if (existingItem) {
            // Si l'article existe déjà, on incrémente la quantité avec la quantité spécifiée
            return {
                carts: state.carts.map((item) =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity + quantityToAdd } // Ajoute la quantité spécifiée
                        : item
                ),
            };
        }
    
        // Si l'article n'existe pas, on l'ajoute avec la quantité spécifiée (par défaut à 1 si non définie)
        if (product?.id) {
            return {
                carts: [
                    ...state.carts,
                    {
                        id: productId,
                        price: product?.price,
                        quantity: quantityToAdd, // Utilisation de la quantité spécifiée
                        stock: 4, // Par exemple, vous pouvez ajuster cela
                    }
                ],
            };
        }
    
        return state;
    }),
    
    removeFromCart: (id: string) =>
        set((state) => ({
        carts: state.carts.filter((Item) => Item.id !== id),
        }
    )),

    clearCart: () => set({ carts: [] }),

    increaseQuantity: (id: string) =>
        set((state) => ({
        carts: state.carts.map((Item) =>
            Item.id === id ? { ...Item, quantity: Item.quantity + 1 } : Item
        ),
        })),

    decreaseQuantity: (id: string) =>
        set((state) => ({
        carts: state.carts
            .map((item) =>
            item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter((item) => item.quantity > 0),
        })),

    getTotalCost: () => {
        const { carts } = get();
        return carts.reduce((total, item) => total + item.price * item.quantity, 0);
    }
    }),
    { name: "cart-storage" }
)
);

export default useCartStore;
