
"use client";

import Link from "next/link";
import { useCart } from "../components/cart-provider";

export default function CartExplorer() {
    const {
        cartItems,
        itemCount,
        subtotal,
        isCartLoaded,
        updateQuantity,
        removeFromCart,
        clearCart,
    } = useCart();

    const formatPrice = (price: number) =>
        new Intl.NumberFormat("en-ZA", {
            style: "currency",
            currency: "ZAR",
        }).format(price);

    if (!isCartLoaded) {
        return (
            <main className="cart-page">
                <p className="cart-loading">Loading your shopping cart...</p>
            </main>
        );
    }

    return (
        <main className="cart-page">
            <header className="cart-header">
                <Link href="/" className="cart-logo">
                    Dr Mood<span>.</span>
                </Link>

                <nav className="cart-navigation">
                    <Link href="/">Home</Link>
                    <Link href="/library">Learn</Link>
                    <Link href="/shop">Shop</Link>
                    <Link href="/cart" className="cart-active-link">
                        Cart ({itemCount})
                    </Link>
                </nav>
            </header>

            <section className="cart-hero">
                <p className="cart-eyebrow">YOUR DR MOOD SELECTION</p>
                <h1>Your shopping cart.</h1>
                <p>
                    Review your selected products and make any changes
                    before proceeding.
                </p>
            </section>

            <section className="cart-content">
                {cartItems.length > 0 ? (
                    <>
                        <div className="cart-section-heading">
                            <div>
                                <h2>Your items</h2>
                                <p>
                                    {itemCount}{" "}
                                    {itemCount === 1 ? "item" : "items"} in
                                    your cart
                                </p>
                            </div>

                            <button
                                type="button"
                                className="cart-clear-button"
                                onClick={clearCart}
                            >
                                Clear cart
                            </button>
                        </div>

                        <div className="cart-layout">
                            <div className="cart-items-list">
                                {cartItems.map((item) => (
                                    <article
                                        className="cart-item"
                                        key={item.product.id}
                                    >
                                        <div className="cart-item-image">
                                            {item.product.category}
                                        </div>

                                        <div className="cart-item-information">
                                            <p className="cart-item-category">
                                                {item.product.category}
                                            </p>

                                            <h3>{item.product.name}</h3>

                                            <p className="cart-item-price">
                                                {formatPrice(
                                                    item.product.price
                                                )}{" "}
                                                each
                                            </p>

                                            <div className="cart-item-actions">
                                                <div className="cart-quantity-controls">
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            updateQuantity(
                                                                item.product.id,
                                                                item.quantity - 1
                                                            )
                                                        }
                                                        aria-label={`Decrease ${item.product.name} quantity`}
                                                    >
                                                        −
                                                    </button>

                                                    <span>
                                                        {item.quantity}
                                                    </span>

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            updateQuantity(
                                                                item.product.id,
                                                                item.quantity + 1
                                                            )
                                                        }
                                                        aria-label={`Increase ${item.product.name} quantity`}
                                                    >
                                                        +
                                                    </button>
                                                </div>

                                                <button
                                                    type="button"
                                                    className="cart-remove-button"
                                                    onClick={() =>
                                                        removeFromCart(
                                                            item.product.id
                                                        )
                                                    }
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>

                                        <strong className="cart-item-total">
                                            {formatPrice(
                                                item.product.price *
                                                item.quantity
                                            )}
                                        </strong>
                                    </article>
                                ))}
                            </div>

                            <aside className="cart-summary">
                                <h2>Order summary</h2>

                                <div className="cart-summary-row">
                                    <span>Items</span>
                                    <span>{itemCount}</span>
                                </div>

                                <div className="cart-summary-row">
                                    <span>Subtotal</span>
                                    <strong>
                                        {formatPrice(subtotal)}
                                    </strong>
                                </div>

                                <div className="cart-summary-divider" />

                                <div className="cart-summary-total">
                                    <span>Total</span>
                                    <strong>
                                        {formatPrice(subtotal)}
                                    </strong>
                                </div>

                                <p className="cart-summary-note">
                                    Delivery costs and any applicable taxes
                                    have not yet been calculated.
                                </p>

                                <button
                                    type="button"
                                    className="cart-checkout-button"
                                    disabled
                                >
                                    Checkout coming soon
                                </button>

                                <Link
                                    href="/shop"
                                    className="cart-continue-shopping"
                                >
                                    Continue shopping →
                                </Link>
                            </aside>
                        </div>
                    </>
                ) : (
                    <div className="cart-empty">
                        <div className="cart-empty-icon">🛍</div>

                        <h2>Your cart is currently empty.</h2>

                        <p>
                            You haven't added any products yet. Explore
                            the Dr Mood collection and find something
                            that suits your needs.
                        </p>

                        <Link
                            href="/shop"
                            className="cart-shop-button"
                        >
                            Explore the shop →
                        </Link>
                    </div>
                )}
            </section>

            <footer className="cart-footer">
                <Link href="/" className="cart-logo">
                    Dr Mood<span>.</span>
                </Link>

                <p>Learn well. Live well.</p>

                <p>© {new Date().getFullYear()} Dr Mood</p>
            </footer>
        </main>
    );
}