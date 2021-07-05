const router = require("express").Router({mergeParams: true});
const controller = require("./tables.controller");


router.route("/").get(controller.list).post(controller.create)

router.route("/:table_id").get(controller.read)

router.route("/:table_id/seat").put(controller.update).delete(controller.finish)



module.exports = router;
