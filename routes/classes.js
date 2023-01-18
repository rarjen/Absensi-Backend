const router = require("express").Router();
const authorize = require("../middlewares/authorize");
const classes = require("../controllers/classes");

router.get("/", authorize(), classes.show);
router.post("/create", authorize(), classes.create);
router.put('/update/:id', authorize(), classes.update);
router.delete('delete/:id', authorize(), classes.destroy);

module.exports = router;
