'use strict';

module.exports = function(app) {
  app.set('views', [
    process.cwd() + '/views/',
    __dirname + '/views/'
  ]);
}
