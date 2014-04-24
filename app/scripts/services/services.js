'use strict';

angular.module('spaApp').factory('breadcrumbService', function($state, $stateParams) {
  var list = [], title;

  function getProperty(object, path) {
    function index(obj, i) {
      return obj[i];
    }

    return path.split('.').reduce(index, object);
  }

  function addBreadcrumb(title, state) {
    list.push({
      title: title,
      state: state
    });
  }

  function generateBreadcrumbs(state, params) {
    if(angular.isDefined(state.parent)) {
      generateBreadcrumbs(state.parent, params);
    }

    if(angular.isDefined(state.breadcrumb)) {
      if(angular.isDefined(state.breadcrumb.title)) {
        // addBreadcrumb($interpolate(state.breadcrumb.title)(state.locals.globals), state.name);

        var displayName='';
        // Loop through ownParams and replace any expressions with the matching value
        angular.forEach(Object.keys(params), function(param, index){
          displayName = state.breadcrumb.title.replace('{:' + param + '}', params[param]);
        });

        addBreadcrumb(displayName, state.name);
      }
    }
  }

  function appendTitle(translation, index) {
    var title = translation;

    if(index < list.length - 1) {
      title += ' > ';
    }

    return title;
  }

  function generateTitle() {
    title = '';

    angular.forEach(list, function(breadcrumb, index) {
      /*$translate(breadcrumb.title).then(
        function(translation) {
          title += appendTitle(translation, index);
        }, function(translation) {
          title += appendTitle(translation, index);
        }
      );*/
      title += appendTitle(breadcrumb.title, index);
    });
  }

  return {
    generate: function() {
      list = [];

      generateBreadcrumbs($state.$current, $stateParams);
      generateTitle();
    },

    title: function() {
      return title;
    },

    list: function() {
      return list;
    }
  };
});
