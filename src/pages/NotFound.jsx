import { Link } from "react-router-dom";
import { usePage } from "../usePage.js";

export default function NotFound() {
  usePage("Page not found — NK Enterprises", "That page is not part of NK Enterprises.");

  return (
    <section className="section">
      <div className="wrap narrow">
        <p className="eyebrow">404</p>
        <h1 className="display display-small">That page is not here.</h1>
        <p className="lede">The house has two organizing services, and a way to call or write.</p>
        <div className="hero-actions">
          <Link className="button" to="/">
            Before you move in
          </Link>
          <Link className="button button-ghost" to="/home-order">
            Home Order
          </Link>
        </div>
      </div>
    </section>
  );
}
