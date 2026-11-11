
"use client";

import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from "react";

import type { Product } from "../data/products";
import { products } from "../data/products";

export type CartItem = {
    product: Product;
    quantity: number;
};

type CartContextType = {
    cartItems: CartItem[];
    itemCount: number;
    subtotal: number;
    isCartLoaded: boolean;
    addToCart: (product: Product, quantity?: number) => boolean;
    updateQuantity: (productId: number, quantity: number) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "dr-mood-cart";

export function CartProvider({ children }: { children: ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isCartLoaded, setIsCartLoaded] = useState(false);

    // Load the saved cart when the application opens.
    useEffect(() => {
        try {
            const savedCart = localStorage.getItem(CART_STORAGE_KEY);

            if (savedCart) {
                const parsedCart: unknown = JSON.parse(savedCart);

                if (Array.isArray(parsedCart)) {
                    const restoredItems: CartItem[] = parsedCart
                        .map((item: unknown) => {
                            if (
                                typeof item !== "object" ||
                                item === null ||
                                !("id" in item) ||
                                !("quantity" in item)
                            ) {
                                return null;
                            }

                            const savedItem = item as {
                                id: number;
                                quantity: number;
                            };

                            const product = products.find(
                                (product) => product.id === savedItem.id
                            );

                            if (
                                !product ||
                                product.purchaseType !== "direct" ||
                                !Number.isInteger(savedItem.quantity) ||
                                savedItem.quantity < 1
                            ) {
                                return null;
                            }

                            return {
                                product,
                                quantity: savedItem.quantity,
                            };
                        })
                        .filter((item): item is CartItem => item !== null);

                    setCartItems(restoredItems);
                }
            }
        } catch (error) {
            console.error("Could not restore the shopping cart:", error);
            setCartItems([]);
        } finally {
            setIsCartLoaded(true);
        }
    }, []);

    // Save cart changes after the initial loading process.
    useEffect(() => {
        if (!isCartLoaded) return;

        try {
            const cartToSave = cartItems.map((item) => ({
                id: item.product.id,
                quantity: item.quantity,
            }));

            localStorage.setItem(
                CART_STORAGE_KEY,
                JSON.stringify(cartToSave)
            );
        } catch (error) {
            console.error("Could not save the shopping cart:", error);
        }
    }, [cartItems, isCartLoaded]);

    // Add a direct-purchase product to the cart.
    const addToCart = (
        product: Product,
        quantity: number = 1
    ): boolean => {
        if (product.purchaseType !== "direct") {
            return false;
        }

        const validQuantity = Math.max(
            1,
            Math.floor(Number.isFinite(quantity) ? quantity : 1)
        );

        setCartItems((currentItems) => {
            const existingItem = currentItems.find(
                (item) => item.product.id === product.id
            );

            if (existingItem) {
                return currentItems.map((item) =>
                    item.product.id === product.id
                        ? {
                            ...item,
                            quantity: item.quantity + validQuantity,
                        }
                        : item
                );
            }

            return [
                ...currentItems,
                {
                    product,
                    quantity: validQuantity,
                },
            ];
        });

        return true;
    };

    // Change the quantity of a product.
    const updateQuantity = (
        productId: number,
        quantity: number
    ) => {
        if (!Number.isFinite(quantity)) return;

        const validQuantity = Math.floor(quantity);

        if (validQuantity < 1) {
            removeFromCart(productId);
            return;
        }

        setCartItems((currentItems) =>
            currentItems.map((item) =>
                item.product.id === productId
                    ? { ...item, quantity: validQuantity }
                    : item
            )
        );
    };

    // Remove a product completely.
    const removeFromCart = (productId: number) => {
        setCartItems((currentItems) =>
            currentItems.filter(
                (item) => item.product.id !== productId
            )
        );
    };

    // Empty the entire cart.
    const clearCart = () => {
        setCartItems([]);
    };

    // Calculate the total number of individual items.
    const itemCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    // Calculate the total purchase amount.
    const subtotal = cartItems.reduce(
        (total, item) =>
            total + item.product.price * item.quantity,
        0
    );

    const contextValue = useMemo(
        () => ({
            cartItems,
            itemCount,
            subtotal,
            isCartLoaded,
            addToCart,
            updateQuantity,
            removeFromCart,
            clearCart,
        }),
        [cartItems, itemCount, subtotal, isCartLoaded]
    );

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
}

// Access the cart from any component inside CartProvider.
export function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error(
            "useCart must be used inside a CartProvider"
        );
    }

    return context;
}