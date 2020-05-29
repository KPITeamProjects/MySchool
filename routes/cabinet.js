var express = require('express');
var router = express.Router();

/* GET cabinet page. */
router.get('/', function(req, res, next) {
    res.render('cabinet', { title: 'Профіль'});
});

module.exports = router;