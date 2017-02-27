(function () {
    "use strict";

    angular
		.module('login.Controladores', [])
		.controller('loginController', loginController);

    loginController.$inject = ['$scope', '$filter'];

    function loginController($scope, $filter) {

        var self = this;

        /* +++ Inicializacion */

        /* Variables */
        self.oLogin = {};

        /* Métodos intefaz */
        self.login = login;

        /* Inicializador */
        iniciar();

        /* --- Fin inicializacion */

        /* +++ Funciones */

        /* Inicializador */
        function iniciar() {
          
        };

        /* Métodos públicos */
        function login() {

         
        }
        /* --- Fin funciones */

    }

})();