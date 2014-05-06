'use strict';

angular.module('spaApp')
  .factory('sameBankProvider', ['$q','$rootScope','SameBankService' ,function ($q, $rootScope, SameBankService) {

    return {
      getSameBank: function(){

        var deferred =$q.defer();

      if(!$rootScope.sameBankTransfer){

        SameBankService.getTransferSameBank().success(function(data,headers){
        console.log('Promise success in same bank transfer');
        $rootScope.sameBankTransfer  = data.transfer;

          deferred.resolve();
        }).error(function(){
          console.erro('Error in promise same bank');
          return deferred.reject('Error ocurrido en getTransferSameBank');
        });
      
      } else{
        deferred.resolve();
      }
        return deferred.promise;
      },

      getAddBeneficiary: function(){

         var deferred =$q.defer();

       if(!$rootScope.sameBankAddBeneficiary){
          SameBankService.getTransferAddBeneficiary().success(function(data,headers){
            console.log('Promise success in same bank Add getAddBeneficiary');
            $rootScope.sameBankAddBeneficiary = data.transfer;

            deferred.resolve();
        }).error(function(){
          console.erro('Error in promise same bank');
          return deferred.reject('Error ocurrido en getTransferSameBank');
        });
      
      } else{
        deferred.resolve();
      }
        return deferred.promise;
      },

      getConfirmationBeneficiary: function(){
          
          var deferred=$q.defer();

      if(!$rootScope.sameBankConfirmation){

        SameBankService.getConfirmationBeneficiary().success(function(data,headers){

          $rootScope.sameBankConfirmation=data.transfer;
          deferred.resolve();
        }).error(function(){

          return deferred.reject('Error ocurrido en get getConfirmationBeneficiary');
        });
      } else {

       deferred.resolve();
      }
        return deferred.promise;
      }      
    };  //End return  
  }]);


 
