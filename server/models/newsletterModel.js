import pool from "./db.js";

export async function createSubscriber(email) {
  await pool.query("INSERT INTO newsletter_subscribers (email) VALUES (?)", [
    email,
  ]);
}
