import ContactForm from "./ContactForm";
import Icon from "./Icon";
import { EMAILS, PHONES, wa } from "../data/siteData";

export default function Contact({ items }) {
  return (
    <section className="wrap contact">
      <div>
        <h2>Get in touch</h2>
        <p>Message me on WhatsApp for the fastest reply, or send an email.</p>
        <h3>WhatsApp</h3>
        <ul>
          {PHONES.map((phone) => (
            <li key={phone}>
              <a href={wa(phone)} target="_blank" rel="noreferrer">
                <Icon name="phone" />
                {phone}
              </a>
            </li>
          ))}
        </ul>
        <h3>Email</h3>
        <ul>
          {EMAILS.map((email) => (
            <li key={email}>
              <a href={`mailto:${email}`}>
                <Icon name="mail" />
                {email}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <ContactForm topics={items.map((item) => item.title)} />
    </section>
  );
}
