import { useState } from "react";
import Icon from "./Icon";

export default function ContactForm({ topics }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", text: "" });
  const update = (key) => (event) =>
    setForm((current) => ({ ...current, [key]: event.target.value }));

  async function submit(event) {
    event.preventDefault();
    setStatus({ type: "info", text: "Sending..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);

      setForm({ name: "", email: "", topic: "", message: "" });
      setStatus({ type: "ok", text: "Message sent. I will reply soon." });
    } catch (error) {
      setStatus({
        type: "err",
        text: error.message || "Message not sent. Try WhatsApp instead.",
      });
    }
  }

  return (
    <form onSubmit={submit} className="form">
      <label>
        <span className="form-label">
          <Icon name="user" />
          Your name
        </span>
        <input
          value={form.name}
          onChange={update("name")}
          required
          placeholder="Enter your name here"
        />
      </label>
      <label>
        <span className="form-label">
          <Icon name="mail" />
          Your email
        </span>
        <input
          type="email"
          value={form.email}
          onChange={update("email")}
          required
          placeholder="Enter your email here"
        />
      </label>
      <label>
        <span className="form-label">
          <Icon name="book" />I am interested in
        </span>
        <select value={form.topic} onChange={update("topic")}>
          <option value="">Choose a course or service</option>
          {topics.map((topic) => (
            <option key={topic}>{topic}</option>
          ))}
        </select>
      </label>
      <label>
        <span className="form-label">
          <Icon name="message" />
          Message
        </span>
        <textarea
          rows="4"
          value={form.message}
          onChange={update("message")}
          required
          placeholder="Enter your message here"
        />
      </label>
      <button type="submit">
        <Icon name="send" />
        Send message
      </button>
      {status.text && (
        <p className={`status ${status.type}`} role="status">
          {status.text}
        </p>
      )}
    </form>
  );
}
