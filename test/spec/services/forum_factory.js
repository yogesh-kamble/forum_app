'use strict';

describe('Service: forumFactory', function () {

  // load the service's module
  beforeEach(module('forumAppFrontEndApp'));

  // instantiate service
  var forumFactory;
  beforeEach(inject(function (_forumFactory_) {
    forumFactory = _forumFactory_;
  }));

  it('should do something', function () {
    expect(!!forumFactory).toBe(true);
  });

});
