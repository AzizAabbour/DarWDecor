import { useScrollReveal } from '../../hooks/useScrollReveal';
import './CTA.css';

export default function CTA() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="cta-section" id="cta">
      <div className="container">
        <div
          className="cta-banner"
          ref={ref}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(0.98)' : 'scale(0.9)',
            transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          <h2>Bring Luxury Into Your Home Today</h2>
          <p>Order your Nordic Comfort L240 sofa now and get free assembly and delivery.</p>
          <a href="#contact" className="cta-btn">
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
}
