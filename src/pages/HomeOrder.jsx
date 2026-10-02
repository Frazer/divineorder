import { Link } from "react-router-dom";
import Photo from "../components/Photo.jsx";
import { people, publicUrl, telHref } from "../config.js";
import { usePage } from "../usePage.js";

const cleaning = ["Kitchen", "Bathrooms", "Floors", "The details a quick pass leaves behind"];

const organization = [
  "Closets and linen",
  "Kitchen and pantry",
  "The rooms that collect piles",
  "A system you can keep next month",
];

export default function HomeOrder() {
  usePage(
    "Home Order — NK Enterprises",
    "Home Order is Nancy Jeppson and Kevin Richard’s cleaning and organization service for a house you already live in. Call for a free consultation before you write."
  );

  return (
    <>
      <section className="page-hero">
        <div className="wrap page-hero-grid">
          <div className="page-hero-copy">
            <p className="eyebrow">Already moved in</p>
            <h1 className="display">Home Order</h1>
            <p className="lede">
              Cleaning and organization for a house you already live in. The rooms
              are furnished. The work fits around the way you live there.
            </p>
            <div className="hero-actions">
              <a className="button" href={telHref(people[0].phone)}>
                Call Nancy
              </a>
              <a className="button button-ghost" href={telHref(people[1].phone)}>
                Call Kevin
              </a>
            </div>
            <p className="hero-switch">
              Call before you write. <Link to="/inquire?service=home-order">The form</Link>{" "}
              emails both of them. Just bought, and not moved in yet?{" "}
              <Link to="/">See the service for before you move in.</Link>
            </p>
          </div>
          <Photo
            className="page-hero-media"
            src={publicUrl("images/pantry.jpg")}
            alt="A bright kitchen with white cabinets, a marble counter, and cookware set neatly beside the stove."
            caption="Clean, and orderly enough to cook tonight."
            width={1400}
            height={1600}
            priority
          />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Two services. Book one, or both.</h2>
            <p className="prose">
              Many houses want both in the same visit: a clean, and an order that
              holds through an ordinary week.
            </p>
          </div>
          <div className="service-pair">
            <article>
              <p className="idx">01</p>
              <h3>Cleaning</h3>
              <p>
                A proper clean of a lived-in home. Kitchens, baths, floors, and the
                surfaces a quick tidy never reaches. The house should feel settled
                again.
              </p>
              <ul className="quiet-list">
                {cleaning.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article>
              <p className="idx">02</p>
              <h3>Organization</h3>
              <p>
                Closets, the kitchen, the pantry, linen, and the rooms where things
                have lost a place. Sorted, given a home, and put back as a system
                you can keep using after we leave.
              </p>
              <ul className="quiet-list">
                {organization.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap band-grid">
          <div>
            <p className="eyebrow">A quote</p>
            <h2 className="display display-small">Priced for the house you live in.</h2>
          </div>
          <div className="band-copy">
            <p>
              Tell them the rooms that need a clean, the rooms that need organization,
              or that you want both. Nancy and Kevin will answer with a figure for
              this house. Call first. The consultation is free.
            </p>
            <div className="hero-actions">
              <a className="button button-on-dark" href={telHref(people[1].phone)}>
                Call Kevin
              </a>
              <Link className="button button-ghost button-on-dark" to="/inquire?service=home-order">
                Write instead
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
