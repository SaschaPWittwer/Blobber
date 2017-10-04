/* eslint-env node */
'use strict';

module.exports = function(app) {
  const express = require('express');
  let tokenRouter = express.Router();

   tokenRouter.post('/', function(req, res) {
      res.send({ access_token: "token" });
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  app.use('/api/token', require('body-parser').json());
  app.use('/api/token', tokenRouter);
};
