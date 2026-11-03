
"use client";

import { useState } from "react";
import Link from "next/link";
import { articles } from "../data/articles";

const categories = [
    "All Articles",
    "Healthy Eating",
    "Nutrition",
    "Wellness",
    "Healthy Living",
];

export default function LibraryExplorer() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] =
        useState("All Articles");

    const filteredArticles = articles.filter((article) => {
        const search = searchTerm.toLowerCase().trim();

        const matchesSearch =
            article.title.toLowerCase().includes(search) ||
            article.category.toLowerCase().includes(search) ||
            article.description.toLowerCase().includes(search);

        const matchesCategory =
            selectedCategory === "All Articles" ||
            article.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <main className="library-page">

            {/* Navigation */}
            <header className="library-header">
                <Link href="/" className="library-logo">
                    Dr Mood
                </Link>

                <nav className="library-nav">
                    <Link href="/">Home</Link>
                    <Link href="/library">Learn</Link>
                </nav>
            </header>

            {/* Library Hero Section */}
            <section className="library-hero">
                <p className="library-eyebrow">
                    THE DR MOOD LEARNING HUB
                </p>

                <h1>
                    Knowledge for a
                    <br />
                    <span>healthier life.</span>
                </h1>

                <p className="library-intro">
                    Explore practical guides to healthy eating, nutrition,
                    wellness and everyday living.
                </p>

                {/* Search */}
                <div className="library-search">
                    <span aria-hidden="true">⌕</span>

                    <input
                        type="search"
                        placeholder="Search articles and topics..."
                        aria-label="Search educational articles"
                        value={searchTerm}
                        onChange={(event) =>
                            setSearchTerm(event.target.value)
                        }
                    />
                </div>
            </section>

            {/* Educational Articles */}
            <section className="library-content">

                <div className="library-section-heading">
                    <div>
                        <p className="library-eyebrow">
                            EXPLORE AND LEARN
                        </p>

                        <h2>Educational Library</h2>
                    </div>

                    <p>
                        {filteredArticles.length}{" "}
                        {filteredArticles.length === 1
                            ? "article"
                            : "articles"}
                    </p>
                </div>

                {/* Category Filters */}
                <div className="library-categories">
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            className={
                                selectedCategory === category
                                    ? "library-category active"
                                    : "library-category"
                            }
                            onClick={() => setSelectedCategory(category)}
                            aria-pressed={selectedCategory === category}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Article Cards */}
                {filteredArticles.length > 0 ? (
                    <div className="library-grid">

                        {filteredArticles.map((article) => (
                            <Link
                                href={`/library/${article.slug}`}
                                className="library-card"
                                key={article.id}
                            >
                                <div className="library-card-art">
                                    <span>
                                        {String(article.id).padStart(2, "0")}
                                    </span>
                                </div>

                                <div className="library-card-body">
                                    <p className="library-card-category">
                                        {article.category}
                                    </p>

                                    <h3>{article.title}</h3>

                                    <p className="library-card-description">
                                        {article.description}
                                    </p>

                                    <div className="library-card-footer">
                                        <span>{article.readTime}</span>

                                        <span>
                                            Read article ↗
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}

                    </div>
                ) : (

                    /* No Search Results */
                    <div className="library-empty">
                        <h3>No articles found</h3>

                        <p>
                            Try another search term or select a different
                            category.
                        </p>

                        <button
                            type="button"
                            className="library-category active"
                            onClick={() => {
                                setSearchTerm("");
                                setSelectedCategory("All Articles");
                            }}
                        >
                            Clear filters
                        </button>
                    </div>

                )}

            </section>

            {/* Footer */}
            <footer className="library-footer">
                <Link href="/">Dr Mood</Link>
                <p>Learn well. Live well.</p>
            </footer>

        </main>
    );
}
