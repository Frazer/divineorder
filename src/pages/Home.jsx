import { Link } from "react-router-dom";
import Photo from "../components/Photo.jsx";
import { people, publicUrl, telHref } from "../config.js";
import { usePage } from "../usePage.js";

const inclusions = [
  {
    n: "01",
    title: "High-quality shelves",
    text: "Shelves for the pantry, linen, closets, and the rooms that would otherwise collect piles. In place before you move in.",
  },
  {
    n: "02",
    title: "Everything the home needs",
    text: "Containers, labels, and a system for the things a household uses. Kitchen stores, linens, cleaning supplies, and the rest of what arrives with a move. Ready on the first morning.",
  },
  {
    n: "03",
    title: "A thorough clean",
    text: "A full clean of the whole house, down to the corners, before move-in day. You unpack into a home that is already clean.",
  },
  {
    n: "04",
    title: "Left in order",
    text: "Everything placed, surfaces finished, and the system easy to follow. You arrive, set down the keys, and the house is ready to live in.",
  },
];

const steps = [
  {
    n: "01",
    title: "A phone call",
    text: "Calling is preferable, and the consultation is free. Phone Nancy or Kevin and tell them the size of the home, when you take the keys, and what you want shelved, organized, and cleaned.",
  },
  {
    n: "02",
    title: "Receive an actual quote",
    text: "They reply with a figure for this house. Five to eight thousand dollars is the guide, and the quote is the real number.",
  },
  {
    n: "03",
    title: "Ready before you move in",
    text: "The work is timed so the shelves, the system, and the clean are finished before move-in day.",
  },
];

export default function Home() {
  usePage(
    "NK Enterprises — Before you move in",
    "NK Enterprises is Nancy Jeppson and Kevin Richard’s home organization service. Before you move in, they fit high-quality shelves, organize the house, and leave it clean. Calling is preferable. Most homes are five to eight thousand dollars."
  );

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Nancy Jeppson & Kevin Richard</p>
          <div className="hero-bottom">
            <h1 className="display">
              The house, <em>in order</em>, before you move in.
            </h1>
            <p className="lede">
              NK Enterprises prepares a home you have just bought. Before move-in day,
              Nancy and Kevin fit high-quality shelves, set up everything the house
              needs to stay organized, and leave it clean.
            </p>
            <div className="hero-actions">
              <a className="button" href={telHref(people[0].phone)}>
                Call Nancy
              </a>
              <a className="button button-ghost" href={telHref(people[1].phone)}>
                Call Kevin
              </a>
            </div>
            <p className="price-note">
              The consultation is free. Most houses then fall between{" "}
              <strong>$5,000 and $8,000</strong>. Calling is preferable.
            </p>
            <p className="hero-switch">
              If you would rather write, the{" "}
              <Link to="/inquire?service=before">contact form</Link> prepares an email
              to us. Already living in the house?{" "}
              <Link to="/home-order">Home Order</Link> is cleaning and organization
              after you have moved in.
            </p>
          </div>
        </div>
        <Photo
          className="hero-media"
          src={publicUrl("images/living.jpg")}
          alt="A calm living room with a low gray sofa, a thick wood coffee table, leather stools, and a brass floor lamp."
          caption="Ready for the first night."
          width={1400}
          height={1750}
          priority
        />
      </section>

      <section className="section" id="included">
        <div className="wrap">
          <div className="section-head">
            <h2>Shelves, a system, and a clean house.</h2>
            <p className="prose">
              The window between the keys and the first night is short. This is the
              work that belongs in it.
            </p>
          </div>
          <ol className="inclusions">
            {inclusions.map((item) => (
              <li className="inclusion" key={item.n}>
                <span className="idx">{item.n}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
          <Photo
            className="wide-photo"
            src={publicUrl("images/kitchen.jpg")}
            alt="A kitchen with dark lower cabinets, white tile, and open wood shelves holding jars and dishes."
            caption="Shelves, and a place for what the kitchen uses."
            width={1800}
            height={1200}
          />
        </div>
      </section>

      <section className="section" id="process">
        <div className="wrap">
          <div className="section-head">
            <h2>How a quote works.</h2>
            <p className="prose">
              Calling is preferable, and the consultation is free. You will have a
              figure before any work is booked.
            </p>
          </div>
          <ol className="steps">
            {steps.map((step) => (
              <li className="step" key={step.n}>
                <span className="idx">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band" id="investment">
        <div className="wrap band-grid">
          <div>
            <p className="eyebrow">The investment</p>
            <p className="amount" aria-label="Five thousand to eight thousand dollars">
              $5,000–$8,000
            </p>
          </div>
          <div className="band-copy">
            <p>
              Depending on the house. Size, the shelving, and how much cleaning and
              organization the rooms need all change the figure. Calling is
              preferable. If you would rather write, the contact form prepares an
              email to us.
            </p>
            <div className="hero-actions">
              <a className="button button-on-dark" href={telHref(people[0].phone)}>
                Call Nancy
              </a>
              <Link className="button button-ghost button-on-dark" to="/inquire?service=before">
                Use the form
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bridge-wrap">
        <Link className="bridge" to="/home-order">
          <div>
            <p className="eyebrow">Already moved in</p>
            <h2>Home Order</h2>
          </div>
          <p>Cleaning and organization for a house you have already moved into.</p>
          <span className="bridge-go">View the service</span>
        </Link>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Home organizers.</h2>
            <p className="prose">
              Contact NK Enterprises for all of your home organizing needs.
            </p>
          </div>
          <ul className="phrases">
            <li>Chaos to order</li>
            <li>Mess to beauty</li>
            <li>Stress to peace</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Also from NK Enterprises.</h2>
            <p className="prose">
              Home organization is the main work. Nancy and Kevin also offer two
              other services. Call, and they will tell you how each one works.
            </p>
          </div>
          <div className="service-pair">
            <article>
              <p className="idx">01</p>
              <h3>Unique Gifts & Décor</h3>
              <p>Gifts and pieces for the house, chosen with the same eye they bring to putting a home in order.</p>
            </article>
            <article>
              <p className="idx">02</p>
              <h3>Children’s financial literacy</h3>
              <p>Instruction that helps children learn how money works. Ask Nancy or Kevin about it when you call.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap principals">
          <div>
            <p className="eyebrow">Nancy Jeppson & Kevin Richard</p>
            <h2>NK Enterprises</h2>
          </div>
          <p className="prose">
            They answer the phone, they quote the house, and they see the work
            through. Call Nancy at {people[0].phone} or Kevin at {people[1].phone}.
            The consultation is free.
          </p>
        </div>
      </section>
    </>
  );
}
