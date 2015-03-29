'use strict';

/**
 * @ngdoc function
 * @name forumAppFrontEndApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the forumAppFrontEndApp
 */
angular.module('forumAppFrontEndApp')
  .controller('MainCtrl', function ($scope, forumFactory) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var forums_ser_obj = forumFactory.get_forums();
    forums_ser_obj.query(function(succesresponse){
        console.log(succesresponse);
        $scope.forums = succesresponse;
    },function(errorresponse){
        console.log(errorresponse);
    })
  });
