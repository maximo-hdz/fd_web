'use strict';

angular.module('spaApp')
.service('errorMessages', function() {

  /**
   * Evaluate the error status code to return a message
   * @param status
   * @return message
   */
  this.get = function( status ) {
    console.info( 'status: ' + status );
    var message = 'Error en el servicio, intente más tarde';

    switch (status) {
      case 401:
        message = 'La sesión ha expirado';
        break;
      case 500:
        message = 'Error interno del servidor: ';
        break;
      case 503:
        message = 'Problema desconocido, por favor intente más tarde';
        break;
      default:
        message = 'Problema desconocido, por favor intente más tarde';
    };

    return message;
  };

});
