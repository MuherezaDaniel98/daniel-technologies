import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const navClassName = ({ isActive }) => (isActive ? "active" : "");

  return (
    <header className="nav">
      <NavLink
        to="/"
        end
        className={({ isActive }) => `brand ${isActive ? "active" : ""}`}
        onClick={close}
      >
        <img src="/logo.jpg" alt="Daniel technologies logo" />
        <span>Daniel Technologies</span>
      </NavLink>
      <button
        className="burger"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        Menu
      </button>
      <nav className={open ? "open" : ""}>
        <NavLink to="/about" className={navClassName} onClick={close}>
          About
        </NavLink>
        <NavLink to="/courses" className={navClassName} onClick={close}>
          Courses
        </NavLink>
        <NavLink to="/services" className={navClassName} onClick={close}>
          Services
        </NavLink>
        <NavLink
          to="/contact"
          onClick={close}
          className={({ isActive }) =>
            `pill ${isActive ? "active" : ""}`.trim()
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
