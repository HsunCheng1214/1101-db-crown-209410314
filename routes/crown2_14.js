var express = require('express');
var router = express.Router();
const crown2Controller_14 = require('../controllers/crown2Controller_14');

/* GET home page. */
router.get('/', crown2Controller_14.getCategories);

module.exports = router;
