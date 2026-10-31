import { Router } from "express";
import { submitContact } from "../controllers/contactController.js";
import { subscribe } from "../controllers/newsletterController.js";
import { listServices } from "../controllers/serviceController.js";

const router = Router();

router.get("/services", listServices);
router.post("/contact", submitContact);
router.post("/newsletter", subscribe);

export default router;
