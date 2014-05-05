'use strict';

angular.module('spaApp')
  .factory('internationalProvider', ['$q', '$rootScope','InternationalServices',function ($q, $rootScope, InternationalServices) {

  return { 
   getTransferInternational: function(){ 
      var deferred = $q.defer();
   
  if(!$rootScope.internationalTransfer){ 
 
    InternationalServices.getTransferInternational().success(function(data,headers){
      console.log('promise succes in internationalTransfer ');
    $rootScope.internationalTransfer = data.transfer;

      deferred.resolve();

    }).error(function(){ 
      console.log('httper');
      return deferred.reject('Error obteniendo cuentas de Inversion')
    });
    
    } else {
      console.log('true default');
       deferred.resolve();
    }   
    return deferred.promise;
    }
  };
}]);

