const router = require('express').Router();
const authorize = require('../middlewares/authorize');
const academic_year = require('../controllers/academic_years');

router.post('/create', authorize(), academic_year.create);
router.put('/active/:id', authorize(), academic_year.active);