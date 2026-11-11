
"use client";

import { useState } from "react";
import Link from "next/link";
import type { Product } from "../../data/products";
import { useCart } from "../../components/cart-provider";

type ProductDetailsProps = {
    product: Product;
    relatedProducts: Product[];
};

export default function ProductDetails({
    product,
    relatedProducts,
}: ProductDetailsProps) {
    const [quantity, setQuantity] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false);

    const { addToCart, itemCount } = useCart();

    const formatPrice = (price: number) =>
        new Intl.NumberFormat("en-ZA", {
            style: "currency",
            currency: "ZAR",
        }).format(price);

    const handleAddToCart = () => {
        const success = addToCart(product, quantity);

        if (success) {
            setAddedToCart(true);
        }
    };

    return (
        <main className="product-page">
            <header className="product-header">
                <Link href="/" className="product-logo">
                    Dr Mood<span>.</span>
                </Link>

                <nav className="product-navigation">
                    <Link href="/">Home</Link>
                    <Link href="/library">Learn</Link>
                    <Link href="/shop">Shop</Link>
                    <Link href="/cart">Cart ({itemCount})</Link>
                </nav>
            </header>

            <div className="product-breadcrumb">
                <Link href="/shop">Shop</Link>
                <span>/</span>
                <span>{product.category}</span>
                <span>/</span>
                <span>{product.name}</span>
            </div>

            <section className="product-detail-container">
                <div className="product-image-area">
                    <div className="product-main-image">
                        <span>{product.category}</span>
                        <p>Dr Mood Product Collection</p>
                    </div>
                </div>

                <div className="product-information">
                    <p className="product-eyebrow">
                        {product.category}
                    </p>

                    {product.badge && (
                        <span className="product-detail-badge">
                            {product.badge}
                        </span>
                    )}

                    <h1>{product.name}</h1>

                    <p className="product-detail-description">
                        {product.description}
                    </p>

                    <p className="product-detail-price">
                        {formatPrice(product.price)}
                    </p>

                    <div className="product-purchase-type">
                        <span>Purchase type</span>

                        <strong>
                            {product.purchaseType === "direct"
                                ? "Direct purchase from Dr Mood"
                                : "Affiliate product"}
                        </strong>
                    </div>

                    {product.purchaseType === "direct" ? (
                        <>
                            <div className="product-quantity">
                                <label htmlFor="product-quantity">
                                    Quantity
                                </label>

                                <div className="quantity-controls">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setQuantity((current) =>
                                                Math.max(1, current - 1)
                                            );
                                            setAddedToCart(false);
                                        }}
                                        aria-label="Decrease quantity"
                                    >
                                        −
                                    </button>

                                    <span id="product-quantity">
                                        {quantity}
                                    </span>

                                    <button
                                        type="button"
                                        onClick={() => {
                                            setQuantity((current) => current + 1);
                                            setAddedToCart(false);
                                        }}
                                        aria-label="Increase quantity"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <p className="product-detail-price">
                                Total: {formatPrice(product.price * quantity)}
                            </p>

                            <button
                                type="button"
                                className="product-purchase-button"
                                onClick={handleAddToCart}
                            >
                                {addedToCart
                                    ? "Added to cart ✓"
                                    : "Add to cart"}
                            </button>

                            {addedToCart && (
                                <div className="product-cart-confirmation">
                                    <p>
                                        ✓ {quantity}{" "}
                                        {quantity === 1 ? "item" : "items"}{" "}
                                        successfully added to your cart!
                                    </p>

                                    <Link href="/cart">
                                        View your cart →
                                    </Link>
                                </div>
                            )}

                            <p className="product-purchase-note">
                                Your selected quantity will be added to your
                                shopping cart. You can review or change it
                                before checkout.
                            </p>
                        </>
                    ) : (
                        <>
                            <button
                                type="button"
                                className="product-purchase-button affiliate-button"
                                disabled
                            >
                                Retailer link coming soon
                            </button>

                            <p className="product-purchase-note">
                                This product will direct customers to an
                                external retailer when its affiliate link
                                has been configured.
                            </p>
                        </>
                    )}

                    <div className="product-information-note">
                        <strong>A thoughtful choice</strong>
                        <p>
                            Explore the product information and make
                            choices that suit your own needs and preferences.
                        </p>
                    </div>
                </div>
            </section>

            <section className="product-related-section">
                <div className="product-related-heading">
                    <p className="product-eyebrow">
                        DISCOVER MORE
                    </p>
                    <h2>You may also like</h2>
                </div>

                {relatedProducts.length > 0 ? (
                    <div className="product-related-grid">
                        {relatedProducts.map((item) => (
                            <Link
                                href={`/shop/${item.slug}`}
                                className="product-related-card"
                                key={item.id}
                            >
                                <div className="product-related-image">
                                    {item.category}
                                </div>

                                <div className="product-related-body">
                                    <p>{item.category}</p>
                                    <h3>{item.name}</h3>
                                    <strong>
                                        {formatPrice(item.price)}
                                    </strong>
                                    <span>View product →</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <p className="product-no-related">
                        More products in this category will be added soon.
                    </p>
                )}
            </section>

            <section className="product-learning-section">
                <p className="product-eyebrow">
                    KNOWLEDGE AND WELLBEING
                </p>

                <h2>Learn more before you choose.</h2>

                <p>
                    Visit the Dr Mood educational library for
                    practical information about healthy eating,
                    nutrition and everyday wellbeing.
                </p>

                <Link href="/library">
                    Explore the learning library →
                </Link>
            </section>

            <footer className="product-footer">
                <Link href="/" className="product-logo">
                    Dr Mood<span>.</span>
                </Link>

                <p>Learn well. Live well.</p>

                <p>© {new Date().getFullYear()} Dr Mood</p>
            </footer>
        </main>
    );
}