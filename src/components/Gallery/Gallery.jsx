import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Gallery.css';

const GALLERY_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80',
    alt: 'Modern living room with Nordic sofa',
    label: 'Living Room Setup',
  },
  {
    src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80',
    alt: 'Sofa detail close-up fabric texture',
    label: 'Premium Fabric',
  },
  {
    src: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&q=80',
    alt: 'Minimalist interior with sofa',
    label: 'Minimalist Interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80',
    alt: 'Sofa in modern apartment setting',
    label: 'Apartment Living',
  },
  {
    src: 'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=400&q=80',
    alt: 'Cozy corner with Nordic sofa',
    label: 'Cozy Corner',
  },
];

export default function Gallery() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <div className="gallery-header" ref={ref} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
          <h2>Image Gallery</h2>
        </div>
        <div className={`gallery-grid stagger-children${isVisible ? ' visible' : ''}`}>
          {GALLERY_IMAGES.map(({ src, alt, label }, i) => (
            <div className="gallery-item" key={i}>
              <img src={src} alt={alt} loading="lazy" />
              <div className="gallery-item-overlay">
                <span>{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
