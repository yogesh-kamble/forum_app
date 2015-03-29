'use strict';

describe('Service: forumApiEndPoint', function () {

  // load the service's module
  beforeEach(module('forumAppFrontEndApp'));

  // instantiate service
  var forumApiEndPoint;
  beforeEach(inject(function (_forumApiEndPoint_) {
    forumApiEndPoint = _forumApiEndPoint_;
  }));

  it('should do something', function () {
    expect(!!forumApiEndPoint).toBe(true);
  });

});
