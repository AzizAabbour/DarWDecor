import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Reviews.css';

const REVIEWS = [
  {
    stars: 5,
    text: 'The best sofa I\'ve ever purchased. Incredible comfort and premium quality.',
    name: 'Sarah M.',
    title: 'Verified Buyer',
    initials: 'SM',
  },
  {
    stars: 5,
    text: 'Excellent comfort and premium quality. The fabric feels luxurious and the design is stunning.',
    name: 'Ahmed K.',
    title: 'Interior Designer',
    initials: 'AK',
  },
  {
    stars: 5,
    text: 'Beautiful! A top-tier design that transformed my living room. Worth every dirham.',
    name: 'Fatima R.',
    title: 'Verified Buyer',
    initials: 'FR',
  },
];

export default function Reviews() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="reviews section" id="reviews">
      <div className="container">
        <div className="reviews-header" ref={ref} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
          <h2>Customer Reviews</h2>
          <p>Premium testimonials from our valued customers</p>
        </div>

        <div className={`reviews-grid stagger-children${isVisible ? ' visible' : ''}`}>
          {REVIEWS.map(({ stars, text, name, title, initials }, i) => (
            <div className="review-card" key={i}>
              <div className="review-stars">
                {'★'.repeat(stars)}{'☆'.repeat(5 - stars)}
              </div>
              <p className="review-text">{text}</p>
              <div className="review-author">
                <div className="review-avatar">{initials}</div>
                <div className="review-author-info">
                  <span className="review-author-name">{name}</span>
                  <span className="review-author-title">{title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reviews-summary" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.7s ease 0.3s' }}>
          <div className="reviews-summary-stat">
            <div className="reviews-summary-value">4.9</div>
            <div className="reviews-summary-label">Avg. Rating</div>
          </div>
          <div className="reviews-divider"></div>
          <div className="reviews-summary-stat">
            <div className="reviews-summary-value">2,847</div>
            <div className="reviews-summary-label">Total Reviews</div>
          </div>
          <div className="reviews-divider"></div>
          <div className="reviews-summary-stat">
            <div className="reviews-summary-value">98%</div>
            <div className="reviews-summary-label">Recommend</div>
          </div>
        </div>
      </div>
    </section>
  );
}
