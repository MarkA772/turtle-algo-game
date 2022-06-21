const express = require('express');

const dbController = require('../controllers/dbController');

const router = express.Router();

router.get('/', dbController.testRoute, (req, res) => {
  return res.status(200).send(res.locals);
});

module.exports = router;