import { getAllServices } from "../models/serviceModel.js";

export async function listServices(_req, res) {
  try {
    const services = await getAllServices();
    res.json(services);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not load services." });
  }
}
