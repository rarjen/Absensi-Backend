const router = require("express").Router();
const authorize = require("../middlewares/authorize");
const students = require("../controllers/students");

router.get("/:class_id", authorize(), students.showByIdClass);

module.exports = router;
