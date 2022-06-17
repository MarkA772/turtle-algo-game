const express = require('express');

const dbController = require('../controllers/dbController');

const router = express.Router();

router.get('/', dbController.testRoute, (req, res) => {
  console.log(res.locals);
  return res.status(200).send('test');
});

module.exports = router;