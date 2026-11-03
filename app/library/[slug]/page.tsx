import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "../../data/articles";

type ArticlePageProps = {
    params: Promise<{ slug: string }>;
};

// Temporary product recommendations (replace later with real data / Supabase)
const recommendedProducts = [
    {
        id: 1,
        name: "Daily Greens Blend",
        description: "A simple everyday mix to support balanced nutrition.",
        price: "R 289",
    },
    {
        id: 2,
        name: "Herbal Calm Tea",
        description: "A gentle evening blend for winding down.",
        price: "R 165",
    },
    {
        id: 3,
        name: "Omega Balance Capsules",
        description: "Support for overall wellbeing as part of a healthy lifestyle.",
        price: "R 349",
    },
];

export default async function ArticlePage({ params }: ArticlePageProps) {
    const { slug } = await params;
    const article = articles.find((item) => item.slug === slug);

    if (!article) {
        notFound();
    }

    // Related articles: same category, exclude current
    const relatedArticles = articles
        .filter(
            (item) =>
                item.slug !== article.slug && item.category === article.category
        )
        .slice(0, 3);

    // Fallback if not enough in the same category
    const fallbackRelated =
        relatedArticles.length < 2
            ? articles
                .filter((item) => item.slug !== article.slug)
                .slice(0, 3)
            : relatedArticles;

    return (
        <main className="article-page">
            {/* Header */}
            <header className="library-header">
                <Link href="/" className="library-logo">
                    Dr Mood
                </Link>

                <nav className="library-nav">
                    <Link href="/">Home</Link>
                    <Link href="/library">Learn</Link>
                </nav>
            </header>

            <article className="article-container">
                <Link href="/library" className="article-back-link">
                    ← Back to educational library
                </Link>

                {/* Article heading */}
                <header className="article-heading">
                    <p className="library-eyebrow">{article.category}</p>
                    <h1>{article.title}</h1>
                    <p className="article-description">{article.description}</p>
                    <p className="article-read-time">{article.readTime}</p>
                </header>

                {/* Cover / visual area */}
                <div className="article-cover">
                    <span>DR MOOD · LEARN WELL. LIVE WELL.</span>
                </div>

                {/* Article body */}
                <div className="article-body">
                    <p className="article-introduction">{article.introduction}</p>

                    {article.sections.map((section, index) => (
                        <section className="article-section" key={section.heading}>
                            <h2>
                                {index + 1}. {section.heading}
                            </h2>

                            {section.paragraphs.map((paragraph, paragraphIndex) => (
                                <p key={paragraphIndex}>{paragraph}</p>
                            ))}
                        </section>
                    ))}

                    {/* Educational note */}
                    <div className="article-note">
                        <strong>A note from Dr Mood</strong>
                        <p>
                            This article is for general educational purposes only. It is not a
                            substitute for individual medical or dietary advice. Speak with a
                            qualified healthcare professional about your personal needs.
                        </p>
                    </div>
                </div>

                {/* ========== PRODUCT RECOMMENDATIONS ========== */}
                <section className="article-products">
                    <div className="article-section-heading">
                        <p className="library-eyebrow">YOU MAY ALSO LIKE</p>
                        <h2>Related products</h2>
                        <p>
                            These products align with the themes in this article. Always
                            review product information carefully.
                        </p>
                    </div>

                    <div className="article-products-grid">
                        {recommendedProducts.map((product) => (
                            <div className="article-product-card" key={product.id}>
                                <div className="article-product-art">
                                    <span>{String(product.id).padStart(2, "0")}</span>
                                </div>
                                <div className="article-product-body">
                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>
                                    <div className="article-product-footer">
                                        <span>{product.price}</span>
                                        <span className="article-product-link">View →</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ========== RELATED ARTICLES ========== */}
                {fallbackRelated.length > 0 && (
                    <section className="article-related">
                        <div className="article-section-heading">
                            <p className="library-eyebrow">CONTINUE LEARNING</p>
                            <h2>Related articles</h2>
                        </div>

                        <div className="article-related-grid">
                            {fallbackRelated.map((related) => (
                                <Link
                                    href={`/library/${related.slug}`}
                                    className="library-card"
                                    key={related.id}
                                >
                                    <div className="library-card-art">
                                        <span>{String(related.id).padStart(2, "0")}</span>
                                    </div>
                                    <div className="library-card-body">
                                        <p className="library-card-category">{related.category}</p>
                                        <h3>{related.title}</h3>
                                        <p className="library-card-description">
                                            {related.description}
                                        </p>
                                        <div className="library-card-footer">
                                            <span>{related.readTime}</span>
                                            <span aria-hidden="true">↗</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                <div className="article-bottom-link">
                    <Link href="/library">← Explore more articles</Link>
                </div>
            </article>

            {/* Footer */}
            <footer className="library-footer">
                <Link href="/">Dr Mood</Link>
                <p>Learn well. Live well.</p>
            </footer>
        </main>
    );
}