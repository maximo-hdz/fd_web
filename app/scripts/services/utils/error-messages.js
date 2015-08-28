'use strict';

angular.module('spaApp')
.service('errorMessages', function() {

  /**
   * Evaluate the error status code to return a message
   * @param status
   * @return message
   */
  this.get = function( status ) {
    var message = 'Error en el servicio, intente más tarde';

    switch (status.status) {


      case 401:
        message = 'La sesión no es válida o no se ha podido genera una sesión para el usuario';
        break;
      case 403:
        message = 'Usuario o contraseña o imagen incorrecta';
        break;
      case 405:
        message = 'El rol de usuario es incorrecto';
        break;
      case 406:
        message = 'Datos incorrectos: ' + status.data.message;
        break;
      case 409:
        message = 'Conflicto de acceso concurrente, el usuario ya está conectado con otra sesion'
        break;
      case 417:
        message = 'Datos no válidos: ' + status.data.message;
        break;
      case 423:
        message = 'El usuario está bloqueado';
        break;
      case 500:
        message = 'Error interno del servidor: ' + status.data.message;
        break;
      case 503:
        message = 'Error técnico, por favor intente más tarde';
        break;
      case 504:
        message = 'Tiempo agotado, vuelva a ingresar';
        break;
      default:
        message = 'Problema desconocido, por favor intente más tarde';
    };

    return message;
  };

});
