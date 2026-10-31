import { Link } from "react-router-dom";
import { PHONES, wa } from "../data/siteData";

export default function CallToAction() {
  return (
    <section className="cta">
      <div className="cta-content">
        <p className="cta-eyebrow">Ready to get started?</p>
        <h2>Let's find the right tech solution for you.</h2>
        <p>
          Ask about a practical course, get help with an IT problem, or tell me
          about your project.
        </p>
      </div>
      <div className="cta-actions">
        <Link className="btn" to="/contact">
          Get in touch
        </Link>
        <a
          className="btn ghost"
          href={wa(PHONES[0])}
          target="_blank"
          rel="noreferrer"
        >
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}
