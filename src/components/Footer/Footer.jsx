import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">Nordic Comfort</div>
            <p className="footer-desc">
              Premium Scandinavian minimalist sofa collections. Designed for modern luxury, durability, and supreme comfort.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social-link" aria-label="Facebook">FB</a>
              <a href="#" className="footer-social-link" aria-label="Instagram">IG</a>
              <a href="#" className="footer-social-link" aria-label="Twitter">TW</a>
              <a href="#" className="footer-social-link" aria-label="Pinterest">PIN</a>
            </div>
          </div>

          <div className="footer-links-col">
            <span className="footer-links-title">Quick Links</span>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#product">Product</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <span className="footer-links-title">Support</span>
            <ul>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            © {new Date().getFullYear()} Nordic Comfort. All rights reserved.
          </div>
          <div className="footer-legal">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
