/* eslint-env node */
'use strict';

module.exports = function(app) {
  const express = require('express');
  let newsRouter = express.Router();

  newsRouter.get('/', function(req, res) {
    res.send({
      'news': [{
          id: 1,
          text: "Release 0.1 is on the way",
          date: "31.10.2017"
        },{
          id: 2,
          text: "Or maybe not.....",
          date: "06.11.2017"
        }
      ]
    });
  });

  newsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  newsRouter.get('/:id', function(req, res) {
    res.send({
      'news': {
        id: req.params.id
      }
    });
  });

  newsRouter.put('/:id', function(req, res) {
    res.send({
      'news': {
        id: req.params.id
      }
    });
  });

  newsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/news', require('body-parser').json());
  app.use('/api/news', newsRouter);
};
