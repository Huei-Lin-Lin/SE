var express = require('express');
const loginCheck = require('./middleware/loginCheck');
var router = express.Router();


/* GET home page. */
router.get('/', loginCheck, function(req, res, next) {
  console.log(req.session);
  res.render('index', {title: 'Express', username: req.session.user.username});
});


router.get('/signUp', function(req, res, next){
  res.render('signUp');
});

router.get('/login', function(req, res, next){
  res.render('login');
});

router.get('/add', function(req, res, next){
  res.render('add');
});

module.exports = router;