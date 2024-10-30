var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  console.log(req.body);
  res.json({
    status: 200,
    message: 'use post method to get a expected response',
  });
});

router.post('/', function (req, res, next) {
  console.log(req.body);
  res.json({
    status: 200,
    message: 'send a query string to get a expected response',
  });
});

router.post('/200', function (req, res, next) {
  console.log(req.body);
  return res.status(200).json({ status: 200, message: 'OK' });
});

router.post('/202', function (req, res, next) {
  console.log(req.body);
  res.status(202).json({ status: 200, message: 'Accepted' });
});

router.post('/500', function (req, res, next) {
  console.log(req.body);
  res.status(500).json({ status: 200, message: 'Internal Server Error' });
});

router.post('/400', function (req, res, next) {
  console.log(req.body);
  res.status(400).json({ status: 200, message: 'Bad Request' });
});

router.post('/401', function (req, res, next) {
  console.log(req.body);
  res.status(401).json({ status: 200, message: 'Unauthorized' });
});

router.post('/403', function (req, res, next) {
  console.log(req.body);
  res.status(403).json({ status: 200, message: 'Forbidden' });
});

router.post('/404', function (req, res, next) {
  console.log(req.body);
  res.status(404).json({ status: 200, message: 'Not Found' });
});

router.post('/405', function (req, res, next) {
  console.log(req.body);
  res.status(405).json({ status: 200, message: 'Method Not Allowed' });
});

router.post('/406', function (req, res, next) {
  console.log(req.body);
  res.status(406).json({ status: 200, message: 'Not Acceptable' });
});

router.post('/408', function (req, res, next) {
  console.log(req.body);
  res.status(408).json({ status: 200, message: 'Request Timeout' });
});

router.post('/409', function (req, res, next) {
  console.log(req.body);
  res.status(409).json({ status: 200, message: 'Conflict' });
});

router.post('/410', function (req, res, next) {
  console.log(req.body);
  res.status(410).json({ status: 200, message: 'Gone' });
});

router.post('/411', function (req, res, next) {
  console.log(req.body);
  res.status(411).json({ status: 200, message: 'Length Required' });
});

router.post('/412', function (req, res, next) {
  console.log(req.body);
  res.status(412).json({ status: 200, message: 'Precondition Failed' });
});

module.exports = router;
