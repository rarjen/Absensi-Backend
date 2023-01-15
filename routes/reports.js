const router = require("express").Router();
const authorize = require("../middlewares/authorize");
const reports = require("../controllers/official_reports");

router.post("/create-report", authorize(), reports.create_official_reports);
router.put("edit/:report_id", authorize(), reports.get_reports);
router.get("/:learning_activity_id", authorize(), reports.update);
router.delete("delete/:report_id", authorize(), reports.deleteReport);

module.exports = router;
