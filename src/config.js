// Add a real email and phone when you have them.
// The inquire form opens a mail draft once email is set.
// The phone is shown in the footer once phone is set.
export const contact = {
  email: "",
  phone: "",
};

export function publicUrl(path) {
  return `${import.meta.env.BASE_URL}${String(path).replace(/^\//, "")}`;
}
