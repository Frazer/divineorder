export const people = [
  {
    name: "Nancy Jeppson",
    phone: "775-342-5524",
    email: "njeppson9@gmail.com",
  },
  {
    name: "Kevin Richard",
    phone: "775-742-1157",
    email: "krich2218@att.net",
  },
];

export function telHref(phone) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function mailHref(subject = "", body = "") {
  const to = people.map((person) => person.email).join(",");
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString().replace(/\+/g, "%20");
  return `mailto:${to}${query ? `?${query}` : ""}`;
}

export function publicUrl(path) {
  return `${import.meta.env.BASE_URL}${String(path).replace(/^\//, "")}`;
}
