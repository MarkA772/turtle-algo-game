const express = require('express');

const turtlesController = require('../controllers/turtlesController');

const router = express.Router();

router.get('/', turtlesController.testRoute, (req, res) => {
  console.log(res.locals);
  return res.status(200).send('test');
});

module.exports = router;