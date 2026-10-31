import { useState } from "react";
import { Link } from "react-router-dom";
import { EMAILS, PHONES, wa } from "../data/siteData";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", text: "" });

  async function subscribe(event) {
    event.preventDefault();
    setStatus({ type: "info", text: "Submitting..." });

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);

      setEmail("");
      setStatus({ type: "ok", text: data.message });
    } catch (error) {
      setStatus({
        type: "err",
        text: error.message || "Subscription failed. Please try again.",
      });
    }
  }

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-about">
            <Link to="/" className="footer-brand">
              <img src="/logo.jpg" alt="Daniel Technologies logo" />
              <span>Daniel Technologies</span>
            </Link>
            <p>
              Practical technology training and dependable IT support for
              individuals, students, and small businesses.
            </p>
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            <h2>Explore</h2>
            <Link to="/about">About</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/services">IT services</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <div className="footer-contact">
            <h2>Get in touch</h2>
            {PHONES.map((phone) => (
              <a key={phone} href={wa(phone)} target="_blank" rel="noreferrer">
                WhatsApp: {phone}
              </a>
            ))}
            <a href={`mailto:${EMAILS[0]}`}>{EMAILS[0]}</a>
          </div>
          <div className="footer-newsletter">
            <h2>Get tech updates</h2>
            <p>Occasional course news and practical technology tips.</p>
            <form onSubmit={subscribe}>
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                maxLength={254}
                placeholder="Your email address"
                autoComplete="email"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
            <p className="newsletter-note">
              Your email is only used for occasional updates.
            </p>
            {status.text && (
              <p className={`status ${status.type}`} role="status">
                {status.text}
              </p>
            )}
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Daniel Technologies. All rights
            reserved.
          </span>
          <span>Intelligent solutions for tomorrow.</span>
        </div>
      </div>
    </footer>
  );
}
