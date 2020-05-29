var express = require('express');
var router = express.Router();

/* GET cabinet page. */
router.get('/', function(req, res, next) {
    res.render('events', { title: 'Завдання'});
});

module.exports = router;