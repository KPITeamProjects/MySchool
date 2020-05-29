var express = require('express');
var router = express.Router();
var name = "Ім'я"
var surname = "Прізвище"
var second_name = "По-батькові"
var school = "Школа"
var form = "Клас"
var mark = 10.9
/* GET cabinet page. */
router.get('/', function(req, res, next) {
    res.render('cabinet', { title: 'Профіль',
                            name:name, second_name:second_name,
                            surname:surname,
                            school:school,
                            form:form,
                            mark:mark});
});

module.exports = router;