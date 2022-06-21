const express = require('express');

const dbController = require('../controllers/dbController');

const router = express.Router();

router.get('/', dbController.getSavedAlgos, (req, res) => {
  return res.status(200).send(res.locals);
});

router.post('/', dbController.saveAlgo, (req, res) => {
  return res.status(200).send(res.locals);
});

router.delete('/', dbController.delAlgo, (req, res) => {
  return res.status(200).send(res.locals);
});

module.exports = router;