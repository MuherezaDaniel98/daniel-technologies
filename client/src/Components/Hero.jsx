import { Link } from "react-router-dom";
import { PHONES, wa } from "../data/siteData";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="tag">Intelligent solutions for tomorrow</p>
        <h1>Learn tech skills. Get your computers and networks working.</h1>
        <p className="lead">
          Daniel Technologies teaches practical courses and fixes real IT
          problems, from beginner to advanced levels.
        </p>
        <div className="actions">
          <a
            className="btn"
            href={wa(PHONES[0])}
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
          </a>
          <Link className="btn ghost" to="/courses">
            See courses
          </Link>
        </div>
      </div>
      <div className="hero-art">
        <img
          className="photo"
          src="/profile.png"
          alt="Daniel, founder of Daniel Technologies"
        />
        <img className="badge" src="/logo.jpg" alt="Daniel Technologies logo" />
      </div>
    </section>
  );
}
