/* eslint-env node */
'use strict';

module.exports = function(app) {
  const express = require('express');
  let postsRouter = express.Router();

  postsRouter.get('/', function(req, res) {
    res.send({
      'posts': [{
          id: 1,
          creator: "Sascha",
          date: "01.08.2000",
          content: "Blog post 1",
          title: "Test 1",
          hot: true
        },{
          id: 2,
          creator: "Joris",
          date: "01.08.2000",
          content: "Blog post 2",
          title: "Test 2"
        },{
          id: 3,
          creator: "Yves",
          date: "01.08.2000",
          content: "Blog post 3",
          title: "Test 3",
          hot: true
        }]
    });
  });

  postsRouter.post('/', function(req, res) {
    res.status(201).send({
      'posts': {
        id: 5,
        title: req.params.title,
        content: req.params.content
      }
    })
  });

  postsRouter.get('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.put('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/posts', require('body-parser').json());
  app.use('/api/posts', postsRouter);
};
