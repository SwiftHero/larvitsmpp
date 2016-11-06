'use strict';

var debug = require('debug')('larvitsmpp');

['error', 'info', 'warn', 'debug', 'verbose', 'silly'].forEach(function (level) {
  exports[level] = function (message) {
    debug(level + ': ' + message);
  };
});
