import { createMessage } from "../models/contactModel.js";

export async function submitContact(req, res) {
  const { name, email, topic, message } = req.body || {};
  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof email !== "string" ||
    !/^\S+@\S+\.\S+$/.test(email) ||
    typeof message !== "string" ||
    !message.trim()
  ) {
    return res
      .status(400)
      .json({ error: "Enter your name, a valid email and a message." });
  }

  try {
    await createMessage({
      name: name.trim(),
      email: email.trim(),
      topic: typeof topic === "string" ? topic.slice(0, 120) : "",
      message: message.trim(),
    });
    res.status(201).json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Message not sent. Try WhatsApp instead." });
  }
}
