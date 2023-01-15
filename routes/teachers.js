const router = require("express").Router();
const authorize = require("../middlewares/authorize");
const teacher = require("../controllers/teachers");

router.post("/create", authorize(), teacher.create);
router.get("/show", authorize(), teacher.show);

module.exports = router;
