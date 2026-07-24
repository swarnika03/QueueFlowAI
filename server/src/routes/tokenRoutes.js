import express from "express";

import {
  generateToken,
  getTokenPosition,
  callNextToken,
  completeToken,
  skipToken,
  holdToken,
  recallToken,
  getTokenStatus,
  getQueueList,
  getCurrentServingToken,
  getMyLatestToken,
  getTokenETA,
  getLatestToken,
} from "../controllers/tokenController.js";

import {
  protect,
  authorizeRoles,
} from "../middleware/authMiddleware.js";

const router = express.Router();

// router.post(
//   "/",
//   protect,
//   generateToken
// );
// router.get(
//   "/:id/position",
//   protect,
//   getTokenPosition
// );
// router.put(
//   "/call-next",
//   protect,
//   authorizeRoles("staff", "admin"),
//   callNextToken
// );
// router.put(
//   "/:id/complete",
//   protect,
//   authorizeRoles("staff", "admin"),
//   completeToken
// );
// router.put(
//   "/:id/skip",
//   protect,
//   authorizeRoles("staff", "admin"),
//   skipToken
// );
// router.put(
//   "/:id/hold",
//   protect,
//   authorizeRoles("staff", "admin"),
//   holdToken
// );
// router.put(
//   "/:id/recall",
//   protect,
//   authorizeRoles("staff", "admin"),
//   recallToken
// );

// router.get(
//   "/:id/status",
//   protect,
//   getTokenStatus
// );

// router.get(
//   "/queue",
//   protect,
//   getQueueList
// );
// router.get(
//   "/current-serving",
//   protect,
//   getCurrentServingToken
// );
// router.get(
//     "/my-token",
//     protect,
//     getMyLatestToken
// );

router.post(
  "/",
  protect,
  generateToken
);

router.get(
  "/queue",
  protect,
  getQueueList
);

router.get(
  "/current-serving",
  protect,
  getCurrentServingToken
);

router.get(
  "/my-token",
  protect,
  getMyLatestToken
);

router.get(
  "/:id/position",
  protect,
  getTokenPosition
);

router.get(
  "/:id/status",
  protect,
  getTokenStatus
);
router.get(
"/:id/eta",
protect,
getTokenETA
);
router.get(
  "/latest-token",
  protect,
  getLatestToken
);
router.put(
  "/call-next",
  protect,
  authorizeRoles("staff", "admin"),
  callNextToken
);

router.put(
  "/:id/complete",
  protect,
  authorizeRoles("staff", "admin"),
  completeToken
);

router.put(
  "/:id/skip",
  protect,
  authorizeRoles("staff", "admin"),
  skipToken
);

router.put(
  "/:id/hold",
  protect,
  authorizeRoles("staff", "admin"),
  holdToken
);

router.put(
  "/:id/recall",
  protect,
  authorizeRoles("staff", "admin"),
  recallToken
);

export default router;