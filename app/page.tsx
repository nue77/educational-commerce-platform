import Link from "next/link";

const categories = [
  {
    number: "01",
    name: "Nutrition & Food",
    description: "Discover better choices for everyday eating.",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85",
    href: "#shop",
  },
  {
    number: "02",
    name: "Everyday Wellness",
    description: "Small habits that support a balanced lifestyle.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=85",
    href: "#learn",
  },
  {
    number: "03",
    name: "Mindful Living",
    description: "Make space for a more intentional way of living.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=85",
    href: "#learn",
  },
];

const products = [
  {
    name: "The Everyday Wellness Guide",
    category: "DIGITAL GUIDE",
    price: "R149.00",
    label: "DR MOOD EDIT",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=85",
    href: "#learn",
  },
  {
    name: "Mindful Morning Essentials",
    category: "WELLNESS",
    price: "R299.00",
    label: "EVERYDAY FAVOURITE",
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=85",
    href: "#shop",
  },
  {
    name: "The Better Eating Journal",
    category: "LIFESTYLE",
    price: "R189.00",
    label: "EDITOR'S PICK",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=85",
    href: "#learn",
  },
];

const articles = [
  {
    category: "NUTRITION",
    title: "A simpler approach to eating well",
    description:
      "Explore practical ways to build balanced meals without making everyday food complicated.",
    time: "5 MIN READ",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "WELLNESS",
    title: "Small habits, meaningful changes",
    description:
      "Discover how realistic daily routines can help you build a lifestyle that works for you.",
    time: "4 MIN READ",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=85",
  },
  {
    category: "MINDFUL LIVING",
    title: "Making room for a slower morning",
    description:
      "Find inspiration for creating a calmer start to your day, one step at a time.",
    time: "6 MIN READ",
    image:
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=900&q=85",
  },
];

export default function Home() {
  return (
    <main className="dr-mood">
      <div className="announcement-bar">
        A little inspiration for a healthier, happier everyday.
      </div>

      <header className="site-header">
        <Link href="/" className="brand" aria-label="Dr Mood home">
          <span className="brand-mark">d.</span>
          <span className="brand-name">
            dr mood<span className="brand-period">.</span>
            <small>LIVE WELL, EVERY DAY</small>
          </span>
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="#shop">Shop</Link>
          <Link href="#learn">Learn</Link>
          <Link href="#about">Our Story</Link>
        </nav>

        <div className="header-actions">
          <Link href="#shop" className="header-search">
            Explore <span aria-hidden="true">↗</span>
          </Link>
          <Link href="#newsletter" className="header-account">
            Join us <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            YOUR EVERYDAY WELLNESS COMPANION
          </div>

          <h1>
            Feel good.
            <br />
            Live <em>well.</em>
            <br />
            Be you.
          </h1>

          <p className="hero-description">
            A more balanced lifestyle starts with small, thoughtful choices.
            Discover inspiration, practical knowledge, and products for your
            everyday wellbeing.
          </p>

          <div className="hero-buttons">
            <Link href="#shop" className="button button-dark">
              Explore the shop <span aria-hidden="true">↗</span>
            </Link>
            <Link href="#learn" className="text-link">
              Discover Dr Mood <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="hero-note">
            <span className="hero-note-icon">✳</span>
            GOOD HEALTH IS A JOURNEY, NOT A DESTINATION.
          </div>
        </div>

        <div className="hero-visual">
          <div
            className="hero-image"
            role="img"
            aria-label="Fresh produce and natural ingredients"
          />
          <div className="hero-image-caption">
            <span>01 / A FRESH PERSPECTIVE</span>
            <span>Made for real life.</span>
          </div>
          <div className="floating-note">
            <span className="floating-note-icon">✳</span>
            <span>
              A little better,
              <br />
              every day.
            </span>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Our approach">
        <div>✳ &nbsp; EDUCATION FIRST</div>
        <span className="trust-divider" />
        <div>✳ &nbsp; THOUGHTFUL DISCOVERY</div>
        <span className="trust-divider" />
        <div>✳ &nbsp; WELLNESS FOR REAL LIFE</div>
        <span className="trust-divider" />
        <div>✳ &nbsp; YOUR JOURNEY, YOUR WAY</div>
      </section>

      <section className="section category-section" id="shop">
        <div className="section-heading">
          <div>
            <span className="section-kicker">A GOOD PLACE TO START</span>
            <h2>
              Your wellbeing,
              <br />
              <em>your way.</em>
            </h2>
          </div>
          <p>
            There is no one-size-fits-all approach to feeling good. Explore
            ideas and products that fit your life, your needs, and your pace.
          </p>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <Link
              href={category.href}
              className="category-card"
              key={category.name}
            >
              <div
                className="category-image"
                style={{ backgroundImage: `url("${category.image}")` }}
                role="img"
                aria-label={category.name}
              >
                <span className="category-number">{category.number}</span>
                <span className="round-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <div className="category-copy">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="featured-section">
        <div className="section">
          <div className="section-heading featured-heading">
            <div>
              <span className="section-kicker">THOUGHTFULLY SELECTED</span>
              <h2>
                Little things.
                <br />
                <em>Better days.</em>
              </h2>
            </div>
            <Link href="#shop" className="text-link">
              Explore our collection <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <Link href={product.href} className="product-image-wrap">
                  <div
                    className="product-image"
                    style={{ backgroundImage: `url("${product.image}")` }}
                    role="img"
                    aria-label={product.name}
                  />
                  <span className="product-label">{product.label}</span>
                  <span className="product-arrow" aria-hidden="true">
                    ↗
                  </span>
                </Link>
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <div className="product-title-row">
                    <h3>{product.name}</h3>
                    <span className="product-price">{product.price}</span>
                  </div>
                  <Link href={product.href} className="product-link">
                    Discover more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="sample-notice">
            These are sample products and prices for the initial design. They
            are not currently available for purchase.
          </p>
        </div>
      </section>

      <section className="section learn-section" id="learn">
        <div className="section-heading">
          <div>
            <span className="section-kicker">KNOWLEDGE THAT EMPOWERS</span>
            <h2>
              A healthier life
              <br />
              <em>starts with learning.</em>
            </h2>
          </div>
          <p>
            Good information can make everyday choices easier. Explore
            approachable ideas for nourishing your body, caring for yourself,
            and living more intentionally.
          </p>
        </div>

        <div className="article-grid">
          {articles.map((article, index) => (
            <article className="article-card" key={article.title}>
              <div
                className="article-image"
                style={{ backgroundImage: `url("${article.image}")` }}
                role="img"
                aria-label={article.title}
              >
                <span>0{index + 1}</span>
              </div>
              <div className="article-content">
                <div className="article-meta">
                  <span>{article.category}</span>
                  <span>{article.time}</span>
                </div>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <Link href="#newsletter" className="article-link">
                  Read more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="brand-story" id="about">
        <div className="story-symbol" aria-hidden="true">
          ✳
        </div>
        <span className="section-kicker">A DIFFERENT KIND OF WELLNESS BRAND</span>
        <h2>
          Better choices.
          <br />
          <em>Without the pressure.</em>
        </h2>
        <p>
          At Dr Mood, we believe that wellbeing should feel accessible,
          practical, and personal. We bring together educational content and
          thoughtfully selected products to help you explore what living well
          means to you.
        </p>
        <Link href="#learn" className="button button-light">
          Get to know us <span aria-hidden="true">↗</span>
        </Link>
      </section>

      <section className="newsletter-section" id="newsletter">
        <div className="newsletter-copy">
          <span className="section-kicker">A NOTE FROM DR MOOD</span>
          <h2>
            Good things
            <br />
            <em>start here.</em>
          </h2>
          <p>
            Get thoughtful wellness ideas, useful guides, and new discoveries
            delivered to your inbox. No pressure, just a little inspiration.
          </p>
        </div>

        <div className="newsletter-form-area">
          <form className="newsletter-form" action="#newsletter" method="get">
            <label htmlFor="newsletter-email">YOUR EMAIL ADDRESS</label>
            <div className="newsletter-input-row">
              <input
                id="newsletter-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
              <button type="submit" aria-label="Submit email address">
                Join us <span aria-hidden="true">→</span>
              </button>
            </div>
            <p>
              By subscribing, you agree to receive email updates from Dr Mood.
              You can unsubscribe at any time. Please read our privacy policy
              for details.
            </p>
          </form>
          <div className="newsletter-decoration" aria-hidden="true">
            <span>dr mood.</span>
            <span>LIVE WELL, EVERY DAY</span>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-top">
          <Link href="/" className="brand footer-brand">
            <span className="brand-mark">d.</span>
            <span className="brand-name">
              dr mood<span className="brand-period">.</span>
              <small>LIVE WELL, EVERY DAY</small>
            </span>
          </Link>

          <p>
            A little more knowledge.
            <br />A little more wellbeing.
            <br />
            A little more you.
          </p>

          <div className="footer-links">
            <div>
              <span>EXPLORE</span>
              <Link href="#shop">Shop</Link>
              <Link href="#learn">Learn</Link>
              <Link href="#about">Our story</Link>
            </div>
            <div>
              <span>INFORMATION</span>
              <Link href="#newsletter">Contact</Link>
              <Link href="#newsletter">Privacy policy</Link>
              <Link href="#shop">Affiliate disclosure</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Dr Mood. All rights reserved.</span>
          <span>MADE FOR A LIFE WELL LIVED.</span>
        </div>
      </footer>
    </main>
  );
}