import express from "express";
import {
  getSettings,
  updateQueueSettings,
  updateNotificationSettings,
} from "../controllers/settingsController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Get all settings
router.get("/", protect, getSettings);

// Update queue settings
router.put("/queue", protect, updateQueueSettings);

// Update notification settings
router.put(
  "/notifications",
  protect,
  updateNotificationSettings
);

export default router;