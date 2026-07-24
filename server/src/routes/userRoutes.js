// import express from "express";
// import { getAllUsers } from "../controllers/userController.js";
// import {
//   protect,
// } from "../middleware/authMiddleware.js";

// const router = express.Router();

// router.get(
//   "/profile",
//   protect,
//   async (req, res) => {
//     res.json(req.user);
//   }
// );

// export default router;


import express from "express";

import {
  protect,
} from "../middleware/authMiddleware.js";

import {
  getAllUsers,
  changePassword
} from "../controllers/userController.js";

const router = express.Router();

// Logged-in user's profile
router.get(
  "/profile",
  protect,
  async (req, res) => {
    res.json(req.user);
  }
);

// Get all registered users
router.get(
  "/",
  protect,
  getAllUsers
);


router.put(
  "/change-password",
  protect,
  changePassword
);


export default router;