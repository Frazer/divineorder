import { people, telHref } from "../config.js";

export default function CallFirst({ heading = "Call before you write." }) {
  return (
    <section className="call-first">
      <div className="wrap call-first-grid">
        <div>
          <p className="eyebrow">Free consultation</p>
          <h2>{heading}</h2>
          <p>
            A phone call is the best way to start. Nancy and Kevin would like to
            hear about the house before you use the form. The consultation is free.
          </p>
        </div>
        <ul className="call-list">
          {people.map((person) => (
            <li key={person.email}>
              <span className="call-name">{person.name}</span>
              <a className="call-phone" href={telHref(person.phone)}>
                {person.phone}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
