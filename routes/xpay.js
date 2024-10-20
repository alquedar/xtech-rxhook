var express = require('express');
var router = express.Router();

/* xpayment route listing. */
router.get('/', function(req, res, next) {
  res.send('Hi, this is the xpayment route.');
});

module.exports = router;
