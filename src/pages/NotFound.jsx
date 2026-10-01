import { Link } from "react-router-dom";
import { usePage } from "../usePage.js";

export default function NotFound() {
  usePage("Page not found — Divine Order", "That page is not part of Divine Order.");

  return (
    <section className="section">
      <div className="wrap narrow">
        <p className="eyebrow">404</p>
        <h1 className="display display-small">That page is not here.</h1>
        <p className="lede">The house has two services, and a way to ask for a quote.</p>
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
