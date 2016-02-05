var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.render('users', { title: "Profile Page", user: req.user });
  //res.send('Profile stuff goes here')
});

module.exports = router;
