import pool from "./db.js";

export async function createMessage({ name, email, topic, message }) {
  await pool.query(
    "INSERT INTO messages (name,email,topic,message) VALUES (?,?,?,?)",
    [name, email, topic, message],
  );
}
