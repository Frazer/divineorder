import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { mailHref, people, publicUrl, telHref } from "../config.js";

const links = [
  { to: "/", label: "Before you move in", end: true },
  { to: "/home-order", label: "Home Order" },
  { to: "/inquire", label: "Inquire" },
];

function Brand() {
  return (
    <Link to="/" className="brand">
      <img src={publicUrl("logo.png")} alt="" width="640" height="640" />
      <span className="brand-name">NK Enterprises</span>
    </Link>
  );
}

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
          <Brand />
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
            <Brand />
            <p className="footer-names">Home organizers</p>
            <ul className="footer-people">
              {people.map((person) => (
                <li key={person.email}>
                  <span>{person.name}</span>
                  <a href={telHref(person.phone)}>{person.phone}</a>
                  <a href={`mailto:${person.email}`}>{person.email}</a>
                </li>
              ))}
            </ul>
            <p className="footer-contact">
              <a href={mailHref("NK Enterprises")}>Email Nancy and Kevin</a>
            </p>
          </div>
          <nav className="footer-nav" aria-label="Footer">
            <Link to="/">Before you move in</Link>
            <Link to="/home-order">Home Order</Link>
            <Link to="/inquire">Inquire</Link>
          </nav>
          <p className="footer-note">
            Chaos to order. Mess to beauty. Stress to peace. Call for a free
            consultation before you write.
          </p>
        </div>
        <div className="wrap footer-base">
          <p>© {new Date().getFullYear()} NK Enterprises</p>
        </div>
      </footer>
    </>
  );
}
