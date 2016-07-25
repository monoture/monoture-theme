'use strict';

var express = require('express');

module.exports = function(app) {
  app.set('views', [
    process.cwd() + '/views/',
    __dirname + '/views/'
  ]);

  app.use(express.static(__dirname + '/dist/'));

  app.locals.basedir = __dirname + '/views/';
}
