var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/profile', function(req, res, next) {
  res.render('profile', { user: req.user });
  //res.send('Profile stuff goes here')
});

module.exports = router;
