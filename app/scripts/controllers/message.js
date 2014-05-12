'use strict';

angular.module('prospectwiseApp')
  .controller('MessageCtrl', function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });


	});

