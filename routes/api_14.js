var express = require('express');
var router = express.Router();
const apiCrown2Controller_14 = require('../controllers/apiCrown2Controller_14');

/* GET home page. */
router.get('/category_14', apiCrown2Controller_14.getCategories);

module.exports = router;
