import express from "express";

import {
  createBranch,
  getBranches,
} from "../controllers/branchController.js";

import {
  protect,
  authorizeRoles,
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.post(
  "/",
  protect,
  authorizeRoles("admin"),
  createBranch
);

router.get(
  "/",
  getBranches
);

export default router;