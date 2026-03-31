'use strict';

const express = require('express');
const { routes } = require('./routes/index');

const createServer = () => {
  const app = express();

  app.use(express.json());
  app.use('/users', routes.usersRouter);
  app.use('/expenses', routes.expensesRouter);
  app.use('/categories', routes.categoriesRouter);

  return app;
};

module.exports = {
  createServer,
};
