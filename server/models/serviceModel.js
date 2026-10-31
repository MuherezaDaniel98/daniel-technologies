import pool from "./db.js";

export async function getAllServices() {
  const [rows] = await pool.query(
    "SELECT id, category, title, description FROM services ORDER BY id",
  );
  return rows;
}
