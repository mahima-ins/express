var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/wlit', function(req, res, next) {
  res.render('index', {title:"wlit",num:10 });
});

module.exports = router;
