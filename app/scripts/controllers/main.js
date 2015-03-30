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

    $scope.createForum = function(){
        var params = {}
        params["email"] = $scope.email;
        params["title"] = $scope.title;
        params["message"] = $scope.message;

        var forum_ser_obj = forumFactory.get_forums();
        forum_ser_obj.create(params, function(succesresponse){
            alert("Forum added");
        },function(errorresponse){
            alert("Error in adding forum");
        })
    }
  });
