var express = require('express');
var router = express.Router();
var lesson_name = "Назва предмету"
var task = "Завдання"
/* GET cabinet page. */
router.get('/', function(req, res, next) {
    res.render('events', { title: 'Завдання',
                            lesson_name: lesson_name,
                            task: task});
});

module.exports = router;