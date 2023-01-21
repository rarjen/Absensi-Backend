const router = require("express").Router();
const student = require("./students");
const auth = require("./auth");
const report = require("./reports");
const teacher = require("./teachers");
const classes = require("./classes");
const presence = require("./presences");
const studies = require("./studies");
const academic_years = require("./academic_years");
const activities = require("./activities");
const learning = require('./learning');
router.get("/", (req, res) => {
  return res.status(200).json({
    status: true,
    message: "success",
    data: null,
  });
});

router.use("/auth", auth);
router.use("/report", report);
router.use("/student", student);
router.use("/teacher", teacher);
router.use("/class", classes);
router.use("/presence", presence);
router.use("/studies", studies);
router.use("/academic-years", academic_years);
router.use("/activities", activities);
router.use("/learning", learning);

module.exports = router;
