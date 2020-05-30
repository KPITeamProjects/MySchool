var express = require('express');
var router = express.Router();
/* GET cabinet page. */
router.get('/', function(req, res, next) {
    res.render('rozklad', { title: 'Розклад',
        lesson_name: lesson_name,
        task: task});
});

module.exports = router;