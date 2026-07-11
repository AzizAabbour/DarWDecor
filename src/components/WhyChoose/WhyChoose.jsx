import { useScrollReveal } from '../../hooks/useScrollReveal';
import './WhyChoose.css';

const TAGS = [
  { icon: '✦', label: 'Luxury Design' },
  { icon: '☁', label: 'Maximum Comfort' },
  { icon: '◆', label: 'Premium Materials' },
  { icon: '∞', label: 'Long Life' },
  { icon: '✧', label: 'Easy Cleaning' },
  { icon: '⌂', label: 'Ideal for Apartments' },
  { icon: '♛', label: 'Perfect for Villas' },
  { icon: '★', label: 'Premium Handmade Quality' },
];

export default function WhyChoose() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="why-choose section" id="why-choose">
      <div className="container">
        <div className="why-choose-header reveal" ref={ref} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
          <h2>Why Choose This Sofa Section</h2>
        </div>
        <div className={`why-choose-tags stagger-children${isVisible ? ' visible' : ''}`}>
          {TAGS.map(({ icon, label }) => (
            <div className="why-tag" key={label}>
              <span className="why-tag-icon">{icon}</span>
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
