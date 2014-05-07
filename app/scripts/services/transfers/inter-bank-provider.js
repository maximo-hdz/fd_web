'use strict';

angular.module('spaApp')
  .factory('interBankProvider', ['$q', '$rootScope', 'InterBankService' ,function ($q, $rootScope, InterBankService) {
   

   return{
    getTransferInterBank: function(){

        var deferred =$q.defer();
 
       if(!$rootScope.interBank){

        InterBankService.getTransferInterBank().success(function(data,headers){
          console.log('Promise success in same bank transfer');
          $rootScope.interBank  = data.transfer;

          deferred.resolve();
        }).error(function(){
          console.erro('Error in promise inter bank');
          return deferred.reject('Error ocurrido en getTransferInterBank');
        });
      
      } else{
        deferred.resolve();
      }
        return deferred.promise;
      }
   };
  }]);
