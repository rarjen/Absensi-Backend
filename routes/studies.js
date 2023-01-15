const router = require("express").Router();
const authorize = require("../middlewares/authorize");
const studies = require("../controllers/studies");

router.get("/", authorize(), studies.show);

module.exports = router;
