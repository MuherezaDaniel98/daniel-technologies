import { createSubscriber } from "../models/newsletterModel.js";

export async function subscribe(req, res) {
  const email =
    typeof req.body?.email === "string"
      ? req.body.email.trim().toLowerCase()
      : "";
  if (email.length > 254 || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: "Enter a valid email address." });
  }

  try {
    await createSubscriber(email);
    res.status(201).json({ ok: true, message: "Thanks for subscribing!" });
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      return res
        .status(409)
        .json({ error: "This email is already subscribed." });
    }
    console.error(error);
    res.status(500).json({ error: "Subscription failed. Please try again." });
  }
}
