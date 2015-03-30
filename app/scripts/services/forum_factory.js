'use strict';

/**
 * @ngdoc service
 * @name forumAppFrontEndApp.forumFactory
 * @description
 * # forumFactory
 * Factory in the forumAppFrontEndApp.
 */
angular.module('forumAppFrontEndApp')
  .factory('forumFactory', function ($resource, forumApiEndPoint) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      get_forums: function (params) {
        return $resource(forumApiEndPoint+"forums", {}, {query:{method:"get", isArray:true}, create:{method:"post", isArray:false, params:params, headers:{"Content-Type": "application/json"}}})
      },
    };
  });
