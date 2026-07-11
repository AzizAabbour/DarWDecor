import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Features.css';

const FEATURE_LIST = [
  'Scandinavian Minimalist Design',
  'Premium Linen Fabric',
  'Solid Wood Frame',
  'Removable Cushions',
  'High Density Foam',
  'Easy Maintenance',
  'Spacious Seating for 5–6 People',
  'Handmade Premium Finish',
  'Soft Natural Beige Color',
];

const DIMENSIONS = [
  { label: 'Length', value: '340 cm' },
  { label: 'Corner', value: '220 cm' },
  { label: 'Depth', value: '200 cm' },
  { label: 'Height', value: '75 cm' },
  { label: 'Seat Height', value: '42 cm' },
  { label: 'Capacity', value: '5-6 Persons' },
];

const MATERIALS = [
  { icon: '🪵', name: 'Solid Wood', desc: 'Reinforced natural wood frame' },
  { icon: '🧵', name: 'Premium Linen Fabric', desc: 'Breathable & durable' },
  { icon: '🪑', name: 'Bolstered Internal Structure', desc: 'Long-lasting support' },
  { icon: '🦿', name: 'Invisible Legs', desc: 'Hidden elegant design' },
];

export default function Features() {
  const [ref1, vis1] = useScrollReveal();
  const [ref2, vis2] = useScrollReveal();

  return (
    <section className="features-section section" id="features">
      <div className="container">
        <div className="features-grid">
          {/* Left - Features */}
          <div ref={ref1} style={{ opacity: vis1 ? 1 : 0, transform: vis1 ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
            <div className="features-card">
              <h3>Features</h3>
              <p className="features-subtitle">Beautifully designed, engineered using the latest modern innovations.</p>
              <div className="features-list">
                {FEATURE_LIST.map((f) => (
                  <div className="feature-item" key={f}>
                    <span className="check">✓</span>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Dimensions + Materials */}
          <div ref={ref2} style={{ opacity: vis2 ? 1 : 0, transform: vis2 ? 'translateX(0)' : 'translateX(30px)', transition: 'all 0.7s ease' }}>
            <div className="dimensions-card">
              <h3>Dimensions</h3>
              <div className="dimensions-grid">
                {DIMENSIONS.map(({ label, value }) => (
                  <div className="dim-item" key={label}>
                    <div className="dim-label">{label}</div>
                    <div className="dim-value">{value}</div>
                  </div>
                ))}
              </div>

              <div className="materials-section">
                <h4>Materials</h4>
                <div className="materials-grid">
                  {MATERIALS.map(({ icon, name, desc }) => (
                    <div className="material-card" key={name}>
                      <div className="material-icon">{icon}</div>
                      <div className="material-name">{name}</div>
                      <div className="material-desc">{desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
