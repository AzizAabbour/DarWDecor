import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './FAQ.css';

const FAQS = [
  {
    q: 'What is the delivery time?',
    a: 'Standard delivery takes 5-7 business days within Morocco. Express delivery is available for an additional fee, with delivery in 2-3 business days.',
  },
  {
    q: 'What are the shipping fees?',
    a: 'We offer free delivery within Casablanca and Rabat. Delivery to other cities is available at a flat rate of 300 MAD.',
  },
  {
    q: 'Is assembly included?',
    a: 'Yes! Our professional team will assemble the sofa at your location free of charge. Assembly typically takes 30-45 minutes.',
  },
  {
    q: 'Can I customize the color?',
    a: 'Absolutely. We offer a range of premium fabric colors including beige, charcoal, light gray, and navy. Custom colors are available upon request with a 2-week lead time.',
  },
  {
    q: 'Is there a warranty?',
    a: 'Yes, the Nordic Comfort L240 comes with a 5-year structural warranty and a 2-year fabric warranty. We stand behind the quality of our craftsmanship.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <div className="faq-header" ref={ref} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
          <h2>FAQ Section</h2>
        </div>

        <div className={`faq-list stagger-children${isVisible ? ' visible' : ''}`}>
          {FAQS.map(({ q, a }, i) => (
            <div className={`faq-item${openIndex === i ? ' open' : ''}`} key={i}>
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                {q}
                <span className="faq-icon">▾</span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">{a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
