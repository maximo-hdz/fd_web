'use strict';

//Factory used to enable communication between different scopes
angular.module("spaApp").factory("dataAuth", function() {
  return {
    data: {},
    response: {}
  };
});
