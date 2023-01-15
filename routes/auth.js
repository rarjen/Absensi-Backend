const router = require("express").Router();
const authorize = require("../middlewares/authorize");
const auth = require("../controllers/auth");

router.post("/register", auth.register);
router.post("/login", auth.login);
router.post("/refresh", auth.refresh);
router.get("/whoami", authorize(), auth.whoami);

module.exports = router;
