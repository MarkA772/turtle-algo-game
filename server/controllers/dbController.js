const { Pool } = require('pg');

const pool = new Pool();

const dbController = {};

dbController.getSavedAlgos = (req, res, next) => {
  pool.query('SELECT * FROM algos ORDER BY id')
    .then((data) => {
      res.locals = data.rows;
      return next();
    })
    .catch((err) => {
      return next(console.log(err));
    });
};

dbController.saveAlgo = (req, res, next) => {
  pool.query(`INSERT INTO algos (algostring) VALUES ('${req.body.data}')`)
  .then((data) => {
    res.locals = data.rows;
    return next();
  })
  .catch((err) => {
      return next(console.log(err));
    });
};

dbController.delAlgo = (req, res, next) => {
  pool.query(`DELETE FROM algos WHERE id=${req.body.id}`)
  .then((data) => {
    res.locals = data.rows;
    return next();
  })
  .catch((err) => {
      return next(console.log(err));
    });
};

module.exports = dbController;