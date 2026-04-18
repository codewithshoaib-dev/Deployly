import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">Deployly</div>
          <p className="footer__tagline">Build. Deploy. Scale.</p>
        </div>

        {/* Links */}
        <div className="footer__grid">
          <div>
            <p className="footer__title">Product</p>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#docs">Docs</a>
          </div>

          <div>
            <p className="footer__title">Company</p>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
            <a href="#">About</a>
          </div>

          <div>
            <p className="footer__title">Legal</p>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>

        {/* Social */}
        <div className="footer__social">
          <a href="#">
            <FaGithub />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer__bottom">
        © 2024–2026 Deployly. All rights reserved.
      </div>
    </footer>
  );
}
