const router = require("express").Router();
const authorize = require("../middlewares/authorize");
const presence = require("../controllers/presences");

router.put("/", authorize(), presence.update);
router.get("/:report_id", authorize(), presence.show);

module.exports = router;
