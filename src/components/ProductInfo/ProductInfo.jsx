import { useScrollReveal } from '../../hooks/useScrollReveal';
import './ProductInfo.css';

const PRODUCT_DATA = [
  { label: 'Name', value: 'Nordic Comfort L240' },
  { label: 'Category', value: 'Luxury L-Shaped Sofa' },
  { label: 'Description', value: 'The Nordic Comfort L240 is a modern furniture masterpiece combining Scandinavian aesthetics with premium build quality. Crafted from solid wood frame with high-density foam cushions. Perfect for living rooms, lounges, and open-plan spaces.' },
];

const FEATURES = [
  'Scandinavian Minimalist Design',
  'Premium Linen Fabric',
  'Solid Wood Frame',
  'High Density Foam',
  'Easy Maintenance',
  'Hidden Elegant Legs',
  'Soft Natural Beige Color',
  'Handmade Premium Finish',
];

export default function ProductInfo() {
  const [ref1, vis1] = useScrollReveal();
  const [ref2, vis2] = useScrollReveal();
  const [ref3, vis3] = useScrollReveal();

  return (
    <section className="product-info section" id="product">
      <div className="container">
        <div className="product-info-grid">
          {/* Left column */}
          <div>
            <div className="product-info-card" ref={ref1} style={{ opacity: vis1 ? 1 : 0, transform: vis1 ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
              <h3>Product Information</h3>
              <div className="info-table">
                {PRODUCT_DATA.map(({ label, value }) => (
                  <div className="info-row" key={label}>
                    <span className="info-label">{label}</span>
                    <span className="info-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="product-info-card" ref={ref2} style={{ marginTop: '1.5rem', opacity: vis2 ? 1 : 0, transform: vis2 ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
              <h3>Features</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-dark-gray)', marginBottom: '1rem' }}>
                Beautifully designed, engineered using the latest modern innovations.
              </p>
              <div className="features-checklist">
                {FEATURES.map((f) => (
                  <div className="feature-check-item" key={f}>
                    <span className="feature-check-icon">✓</span>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Room Preview */}
          <div ref={ref3} style={{ opacity: vis3 ? 1 : 0, transform: vis3 ? 'translateX(0)' : 'translateX(30px)', transition: 'all 0.7s ease' }}>
            <div className="product-info-card">
              <h3>Room Preview</h3>
              <div className="room-diagram">
                <div className="room-sofa-visual">
                  L-Shaped Sofa
                </div>
                <div className="room-dimensions">
                  <div className="room-dim">
                    <div className="room-dim-value">340</div>
                    <div className="room-dim-label">Width (cm)</div>
                  </div>
                  <div className="room-dim">
                    <div className="room-dim-value">220</div>
                    <div className="room-dim-label">Corner (cm)</div>
                  </div>
                  <div className="room-dim">
                    <div className="room-dim-value">200</div>
                    <div className="room-dim-label">Depth (cm)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
