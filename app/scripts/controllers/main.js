'use strict';

angular.module('LearnApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .controller('TodoCtrl', function ($scope) {
    $scope.testData = [
      'One',
      'Two',
      'Three'
    ];
  });