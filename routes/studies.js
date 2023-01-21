const router = require("express").Router();
const authorize = require("../middlewares/authorize");
const studies = require("../controllers/studies");

router.get("/", authorize(), studies.show);
router.post('/create', authorize(), studies.create);
router.put('/update/:id', authorize(), studies.update);

module.exports = router;
