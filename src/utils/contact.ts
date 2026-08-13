export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const sanitizeHeaderValue = (value: string): string =>
  value.replace(/[\r\n]+/g, ' ').replace(/\s+/g, ' ').trim();

export const buildMailtoUrl = (recipient: string, formData: ContactFormData): string => {
  const fullName = sanitizeHeaderValue(`${formData.firstName} ${formData.lastName}`);
  const subject = encodeURIComponent(`Portfolio Contact from ${fullName}`);
  const body = encodeURIComponent(
    `Name: ${fullName}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`,
  );

  return `mailto:${recipient}?subject=${subject}&body=${body}`;
};
