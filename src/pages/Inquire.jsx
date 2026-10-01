import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { contact } from "../config.js";
import { usePage } from "../usePage.js";

const services = [
  { value: "before", label: "Before I move in" },
  { value: "home-order", label: "Home Order — I already live there" },
  { value: "unsure", label: "Not sure which service" },
];

const serviceLabels = Object.fromEntries(services.map((item) => [item.value, item.label]));

const hints = [
  "Roughly how large the house is",
  "Whether you have the keys yet",
  "Which rooms need shelves, a clean, or organization",
  "When you move in, or when you would like the work done",
];

function noteFor(service) {
  if (service === "home-order") {
    return "Home Order is quoted from the rooms you want cleaned and the rooms you want organized.";
  }
  if (service === "unsure") {
    return "If you have just bought, the guide is $5,000 to $8,000. If you already live there, the quote follows the cleaning and organization you want.";
  }
  return "Before you move in, most houses fall between $5,000 and $8,000. That is a guide. The quote is for this house.";
}

function compose(form) {
  return [
    `Name: ${form.name.trim()}`,
    `Email: ${form.email.trim()}`,
    form.phone.trim() ? `Phone: ${form.phone.trim()}` : null,
    `Service: ${serviceLabels[form.service]}`,
    "",
    form.message.trim(),
  ]
    .filter((line) => line !== null)
    .join("\n");
}

export default function Inquire() {
  const [params] = useSearchParams();
  const requested = params.get("service");
  const preset = services.some((item) => item.value === requested) ? requested : "before";

  usePage(
    "Inquire — Divine Order",
    "Request a quote from Kevin and Nancy for Divine Order. Before you move in, most houses are five to eight thousand dollars. Home Order is quoted for the house."
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: preset,
    message: "",
    company: "",
  });
  const [errors, setErrors] = useState({});
  const [note, setNote] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setForm((current) =>
      current.service === preset ? current : { ...current, service: preset }
    );
  }, [preset]);

  const aside = useMemo(() => noteFor(form.service), [form.service]);

  function update(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Add your name, so the quote has a person on it.";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      next.email = "Add an email address Kevin and Nancy can reply to.";
    }
    if (!form.message.trim()) {
      next.message = "Tell us a little about the house.";
    }
    return next;
  }

  function onSubmit(event) {
    event.preventDefault();
    if (form.company) return;
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) {
      const first = Object.keys(next)[0];
      document.getElementById(first)?.focus();
      return;
    }

    const body = compose(form);
    setNote(body);
    setCopied(false);

    if (contact.email) {
      const subject = `Divine Order quote — ${serviceLabels[form.service]} — ${form.name.trim()}`;
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
  }

  async function copyNote() {
    try {
      await navigator.clipboard.writeText(note);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className="section inquire">
      <div className="wrap inquire-grid">
        <div>
          <p className="eyebrow">A quote</p>
          <h1 className="display display-small">Tell us about the house.</h1>
          <p className="lede">
            Kevin and Nancy quote each home themselves. A few particulars are
            enough for them to come back with a figure.
          </p>

          {note ? (
            <div className="confirm" role="status">
              <h2>The note is ready.</h2>
              <p>
                {contact.email
                  ? "Your mail app should open with this note addressed to Kevin and Nancy. You can copy it here as well."
                  : "Copy this note and send it to Kevin and Nancy."}
              </p>
              <textarea readOnly value={note} aria-label="Your inquiry" />
              <div className="hero-actions">
                <button type="button" className="button" onClick={copyNote}>
                  {copied ? "Copied" : "Copy note"}
                </button>
                <button type="button" className="button button-ghost" onClick={() => setNote("")}>
                  Edit the note
                </button>
              </div>
            </div>
          ) : (
            <form className="inquiry-form" onSubmit={onSubmit} noValidate>
              <div className="form-row">
                <Field
                  id="name"
                  label="Name"
                  value={form.name}
                  onChange={update}
                  autoComplete="name"
                  error={errors.name}
                />
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={update}
                  autoComplete="email"
                  error={errors.email}
                />
              </div>
              <div className="form-row">
                <Field
                  id="phone"
                  label="Phone, if you like"
                  type="tel"
                  value={form.phone}
                  onChange={update}
                  autoComplete="tel"
                />
                <div className={`field ${errors.service ? "has-error" : ""}`}>
                  <label htmlFor="service">Service</label>
                  <select id="service" name="service" value={form.service} onChange={update}>
                    {services.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <Field
                id="message"
                label="About the house"
                value={form.message}
                onChange={update}
                error={errors.message}
                multiline
                placeholder="Size, timing, and what you want done."
              />
              <div className="hp" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={update}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <p className="form-aside">{aside}</p>
              <button className="button" type="submit">
                Request a quote
              </button>
            </form>
          )}
        </div>

        <aside className="inquire-aside">
          <p className="eyebrow">What helps a quote</p>
          <ul className="quiet-list">
            {hints.map((hint) => (
              <li key={hint}>{hint}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
  placeholder,
  multiline = false,
}) {
  const Control = multiline ? "textarea" : "input";
  return (
    <div className={`field ${error ? "has-error" : ""}`}>
      <label htmlFor={id}>{label}</label>
      <Control
        id={id}
        name={id}
        type={multiline ? undefined : type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        placeholder={placeholder}
        rows={multiline ? 6 : undefined}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error ? (
        <p className="field-error" id={`${id}-error`}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
