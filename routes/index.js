var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dispatch.jsx', 
  { 
    comp:'index',
    title:"測試用",
    layout:'front',
    nav:"home"
  });
});

module.exports = router;


