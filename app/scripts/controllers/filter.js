app.controller("detailCreditCtrl", [ "$scope", "$filter", "db" function ($scope, $filter, db){
 filter('fromNow', function() {
    return function(dateString) {
      return moment(dateString).fromNow()
    };
}]);
