const express = require("express");

const ctrl = require("../../controllers/authentication/index");

const router = express.Router();

const { validateBody, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/user");

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  ctrl.registerUser
);

router.post("/login", validateBody(schemas.loginSchema), ctrl.loginUser);

router.get("/current", authenticate, ctrl.getCurrentUser);

router.post("/logout", authenticate, ctrl.logoutUser);

router.patch(
  "/",
  authenticate,
  validateBody(schemas.fieldSubscriptionSchema),
  ctrl.updateSubscriptionField
);

module.exports = router;
