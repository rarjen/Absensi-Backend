const router = require("express").Router();
const authorize = require("../middlewares/authorize");
const activities = require("../controllers/activities");

router.post("/create", authorize(), activities.create);
router.get("/:study_id", authorize(), activities.showByStudyId);
router.get("/:teacher_id", authorize(), activities.showByTeacherId);
router.put("/edit/:studyId", authorize(), activities.update);

module.exports = router;
