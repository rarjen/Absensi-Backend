const router = require('express').Router();
const authorize = require('../middlewares/authorize');
const learning = require('../controllers/learning_activities/');

router.get('/show', authorize(), learning.show);
router.post('/create', authorize(), learning.create);
router.put('/update/:id', authorize(), learning.update);
router.get('/show/:teacher_id', authorize(), learning.showByTeacher);

module.exports = router;