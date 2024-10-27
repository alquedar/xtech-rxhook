var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  console.log(req.body);
  res.send('send a query string to get a expected response');
});

router.get('/200', function (req, res, next) {
  console.log(req.body);
  res.status(200).send('OK');
});

router.get('/202', function (req, res, next) {
  console.log(req.body);
  res.status(202).send('Accepted');
});

router.get('/500', function (req, res, next) {
  console.log(req.body);
  res.status(500).send('Internal Server Error');
});

router.get('/400', function (req, res, next) {
  console.log(req.body);
  res.status(400).send('Bad Request');
});

router.get('/401', function (req, res, next) {
  console.log(req.body);
  res.status(401).send('Unauthorized');
});

router.get('/403', function (req, res, next) {
  console.log(req.body);
  res.status(403).send('Forbidden');
});

router.get('/404', function (req, res, next) {
  console.log(req.body);
  res.status(404).send('Not Found');
});

router.get('/405', function (req, res, next) {
  console.log(req.body);
  res.status(405).send('Method Not Allowed');
});

router.get('/406', function (req, res, next) {
  console.log(req.body);
  res.status(406).send('Not Acceptable');
});

router.get('/408', function (req, res, next) {
  console.log(req.body);
  res.status(408).send('Request Timeout');
});

router.get('/409', function (req, res, next) {
  console.log(req.body);
  res.status(409).send('Conflict');
});

router.get('/410', function (req, res, next) {
  console.log(req.body);
  res.status(410).send('Gone');
});

router.get('/411', function (req, res, next) {
  console.log(req.body);
  res.status(411).send('Length Required');
});

router.get('/412', function (req, res, next) {
  console.log(req.body);
  res.status(412).send('Precondition Failed');
});

module.exports = router;
