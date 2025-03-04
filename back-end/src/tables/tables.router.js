const router = require("express").Router({ mergeParams: true });
const controller = require("./tables.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.list).post(controller.create).all(methodNotAllowed);

router.route("/:table_id").get(controller.read).all(methodNotAllowed);

router
  .route("/:table_id/seat")
  .put(controller.update)
  .delete(controller.finish)
  .all(methodNotAllowed);

module.exports = router;
