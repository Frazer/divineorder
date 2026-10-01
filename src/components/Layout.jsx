import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { contact } from "../config.js";

const links = [
  { to: "/", label: "Before you move in", end: true },
  { to: "/home-order", label: "Home Order" },
  { to: "/inquire", label: "Inquire" },
];

export default function Layout() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="wordmark">
            Divine Order
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
          <nav
            id="site-nav"
            className={open ? "nav-links is-open" : "nav-links"}
            aria-label="Primary"
          >
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.end} className="nav-link">
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main id="content">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div>
            <Link to="/" className="wordmark">
              Divine Order
            </Link>
            <p className="footer-names">Kevin & Nancy</p>
            {contact.phone ? (
              <p className="footer-contact">
                <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}>{contact.phone}</a>
              </p>
            ) : null}
            {contact.email ? (
              <p className="footer-contact">
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
            ) : null}
          </div>
          <nav className="footer-nav" aria-label="Footer">
            <Link to="/">Before you move in</Link>
            <Link to="/home-order">Home Order</Link>
            <Link to="/inquire">Inquire</Link>
          </nav>
          <p className="footer-note">
            A house put in order. Before you move in, or once you already live there.
          </p>
        </div>
        <div className="wrap footer-base">
          <p>© {new Date().getFullYear()} Kevin & Nancy</p>
        </div>
      </footer>
    </>
  );
}
