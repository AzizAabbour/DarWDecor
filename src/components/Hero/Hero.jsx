import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Premium Collection
          </div>

          <h1 className="hero-title">
            Minimalism Meets<br />Ultimate Comfort
          </h1>

          <p className="hero-description">
            Experience luxury living with the Nordic Comfort L240, designed for
            modern elegance that redefines comfort, and timeless design.
          </p>

          <div className="hero-rating">
            <span className="hero-stars">★★★★★</span>
            <span className="hero-rating-text">4.9/5</span>
            <span className="hero-rating-count">(2,847 reviews)</span>
          </div>

          <div className="hero-price">
            <span className="hero-price-current">11,900 MAD</span>
            <span className="hero-price-old">14,900 MAD</span>
          </div>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Buy Now</a>
            <a href="#contact" className="btn btn-outline">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
