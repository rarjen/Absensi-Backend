const router = require("express").Router();
const authorize = require("../middlewares/authorize");
const classes = require("../controllers/classes");

router.get("/", authorize(), classes.show);

module.exports = router;
