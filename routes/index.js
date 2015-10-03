var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dispatch.jsx', 
  { 
    comp:'index',
    title:"測試用",
    layout:'front',
    nav:"home",
    views:{
      type:"index"
    }
  });
});

router.get('/menu1', function(req, res, next) {
  res.render('dispatch.jsx', 
  { 
    comp:'index',
    title:"測試用",
    layout:'front',
    nav:"home",
    views:{
      type:"menu1"
    }
  });
});

router.get('/menu2', function(req, res, next) {
  res.render('dispatch.jsx', 
  { 
    comp:'index',
    title:"測試用",
    layout:'front',
    nav:"home",
    views:{
      type:"menu2"
    }
  });
});

module.exports = router;


