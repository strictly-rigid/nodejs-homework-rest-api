const express = require("express");

const router = express.Router();

const controllers = require("../../controllers/contacts/index");

const { validateBody, isValidId, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/contact");

router.get("/", authenticate, controllers.getAll);

router.get("/:id", authenticate, isValidId, controllers.getById);

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  controllers.add
);

router.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  controllers.updateById
);

router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  controllers.updateStatusContact
);

router.delete("/:id", authenticate, isValidId, controllers.deleteById);

module.exports = router;
