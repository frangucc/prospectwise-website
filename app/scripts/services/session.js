'use strict';

angular.module('prospectwiseApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
