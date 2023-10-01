const express = require("express");

const router = express.Router();

const controllers = require("../../controllers/contacts/index");

const { validateBody, isValidId } = require("../../middlewares");

const { schemas } = require("../../models/contact");

router.get("/", controllers.getAll);

router.get("/:id", isValidId, controllers.getById);

router.post("/", validateBody(schemas.addSchema), controllers.add);

router.put(
  "/:id",
  isValidId,
  validateBody(schemas.addSchema),
  controllers.updateById
);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  controllers.updateStatusContact
);

router.delete("/:id", isValidId, controllers.deleteById);

module.exports = router;

// const express = require("express");

// const router = express.Router();

// const controllers = require("../../controllers/contacts");

// const { validateBody, isValidId } = require("../../middlewares");

// const { schemas } = require("../../models/contact");

// router.get("/", controllers.getAll);

// router.get("/:id", isValidId, controllers.getById);

// router.post("/", validateBody(schemas.addSchema), controllers.add);

// router.put(
//   "/:id",
//   isValidId,
//   validateBody(schemas.addSchema),
//   controllers.updateById
// );

// router.patch(
//   "/:id/favorite",
//   isValidId,
//   validateBody(schemas.updateFavoriteSchema),
//   controllers.updateStatusContact
// );

// router.delete("/:id", isValidId, controllers.deleteById);

// module.exports = router;
