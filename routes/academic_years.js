const router = require("express").Router();
const authorize = require("../middlewares/authorize");
const academic_years = require("../controllers/academic_years");

router.post("/create", authorize(), academic_years.create);
router.get("/show", authorize(), academic_years.show);
router.put("/edit/:academicYear_id", authorize(), academic_years.update);
router.put('/active/:id', authorize(), academic_years.active);


module.exports = router;
