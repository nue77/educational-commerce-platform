
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { products } from "../data/products";
import { useCart } from "../components/cart-provider";

const categories = [
    "All Products",
    ...Array.from(
        new Set(products.map((product) => product.category))
    ),
];

export default function ShopExplorer() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] =
        useState("All Products");
    const [addedProductId, setAddedProductId] = useState<number | null>(
        null
    );

    const { addToCart, itemCount } = useCart();

    const filteredProducts = useMemo(() => {
        const search = searchTerm.toLowerCase().trim();

        return products.filter((product) => {
            const matchesSearch =
                product.name.toLowerCase().includes(search) ||
                product.description.toLowerCase().includes(search) ||
                product.category.toLowerCase().includes(search);

            const matchesCategory =
                selectedCategory === "All Products" ||
                product.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, selectedCategory]);

    const formatPrice = (price: number) =>
        new Intl.NumberFormat("en-ZA", {
            style: "currency",
            currency: "ZAR",
        }).format(price);

    const handleAddToCart = (product: (typeof products)[number]) => {
        const success = addToCart(product, 1);

        if (success) {
            setAddedProductId(product.id);
        }
    };

    return (
        <main className="shop-page">
            <header className="shop-header">
                <Link href="/" className="shop-logo">
                    Dr Mood<span>.</span>
                </Link>

                <nav className="shop-navigation">
                    <Link href="/">Home</Link>
                    <Link href="/library">Learn</Link>
                    <Link href="/shop" className="shop-active-link">
                        Shop
                    </Link>
                    <Link href="/cart" className="shop-cart-link">
                        Cart ({itemCount})
                    </Link>
                </nav>
            </header>

            <section className="shop-hero">
                <p className="shop-eyebrow">
                    THE DR MOOD COLLECTION
                </p>

                <h1>
                    Nourish your life.
                    <br />
                    <span>Shop with intention.</span>
                </h1>

                <p className="shop-hero-description">
                    Discover thoughtful products that support healthier
                    everyday choices, from wholesome foods to natural
                    lifestyle essentials.
                </p>

                <a href="#shop-products" className="shop-hero-button">
                    Explore the collection <span>↓</span>
                </a>
            </section>

            <section className="shop-content" id="shop-products">
                <div className="shop-section-heading">
                    <div>
                        <p className="shop-eyebrow">DISCOVER DR MOOD</p>
                        <h2>Explore our products</h2>
                    </div>

                    <p className="shop-product-count">
                        {filteredProducts.length}{" "}
                        {filteredProducts.length === 1
                            ? "product"
                            : "products"}
                    </p>
                </div>

                <div className="shop-search">
                    <span aria-hidden="true">⌕</span>

                    <input
                        type="search"
                        placeholder="Search products..."
                        aria-label="Search products"
                        value={searchTerm}
                        onChange={(event) =>
                            setSearchTerm(event.target.value)
                        }
                    />
                </div>

                <div className="shop-filter-heading">
                    <h3>Browse categories</h3>

                    <button
                        type="button"
                        className="shop-clear-filter"
                        onClick={() => {
                            setSelectedCategory("All Products");
                            setSearchTerm("");
                        }}
                    >
                        Clear filters
                    </button>
                </div>

                <div className="shop-categories">
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            className={
                                selectedCategory === category
                                    ? "shop-category active"
                                    : "shop-category"
                            }
                            onClick={() => setSelectedCategory(category)}
                            aria-pressed={selectedCategory === category}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {filteredProducts.length > 0 ? (
                    <div className="shop-grid">
                        {filteredProducts.map((product) => (
                            <article className="shop-card" key={product.id}>
                                <div className="shop-card-image">
                                    <span className="shop-image-placeholder">
                                        {product.category}
                                    </span>

                                    {product.badge && (
                                        <span className="shop-product-badge">
                                            {product.badge}
                                        </span>
                                    )}
                                </div>

                                <div className="shop-card-body">
                                    <p className="shop-card-category">
                                        {product.category}
                                    </p>

                                    <h3>{product.name}</h3>

                                    <p className="shop-card-description">
                                        {product.description}
                                    </p>

                                    <div className="shop-card-bottom">
                                        <strong>
                                            {formatPrice(product.price)}
                                        </strong>

                                        <span
                                            className={
                                                product.purchaseType === "direct"
                                                    ? "shop-type direct"
                                                    : "shop-type affiliate"
                                            }
                                        >
                                            {product.purchaseType === "direct"
                                                ? "Direct purchase"
                                                : "Affiliate"}
                                        </span>
                                    </div>

                                    <Link
                                        href={`/shop/${product.slug}`}
                                        className="shop-view-product"
                                    >
                                        View product →
                                    </Link>

                                    {product.purchaseType === "direct" && (
                                        <button
                                            type="button"
                                            className="shop-add-to-cart"
                                            onClick={() =>
                                                handleAddToCart(product)
                                            }
                                        >
                                            {addedProductId === product.id
                                                ? "Added to cart ✓"
                                                : "Add to cart"}
                                        </button>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="shop-empty">
                        <h3>No products found</h3>

                        <p>
                            Try another search or choose a different category.
                        </p>

                        <button
                            type="button"
                            onClick={() => {
                                setSearchTerm("");
                                setSelectedCategory("All Products");
                            }}
                        >
                            Show all products
                        </button>
                    </div>
                )}
            </section>

            <section className="shop-education">
                <div>
                    <p className="shop-eyebrow">
                        LEARN BEFORE YOU CHOOSE
                    </p>

                    <h2>Better choices start with knowledge.</h2>

                    <p>
                        Explore our educational library for practical
                        information about nutrition, healthy eating and
                        everyday wellbeing.
                    </p>

                    <Link href="/library">
                        Visit the learning hub →
                    </Link>
                </div>
            </section>

            <footer className="shop-footer">
                <Link href="/" className="shop-logo">
                    Dr Mood<span>.</span>
                </Link>

                <p>Learn well. Live well.</p>

                <p>© {new Date().getFullYear()} Dr Mood</p>
            </footer>
        </main>
    );
}