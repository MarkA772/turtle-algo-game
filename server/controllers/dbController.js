const { Pool } = require('pg');

const pool = new Pool();

const dbController = {};

dbController.testRoute = (req, res, next) => {
  pool.query('SELECT * FROM algos')
    .then((data) => {
      res.locals = data.rows;
      return next();
    })
    .catch((err) => {
      return next(console.log(err));
    });
};

module.exports = dbController;