var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('crown_14', {
    title: 'Express',
    name: 'Hsun Cheng',
    id: '209410314',
  });
});

module.exports = router;
