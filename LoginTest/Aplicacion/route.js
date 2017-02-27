angular
    .module('login.Routes', ['ngRoute'])
    .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    //Configuramos las rutas de la aplicación
    $routeProvider
        .when(URL_LOGIN, {
            cache: false,
            templateUrl: TEMPLATE_LOGIN,
            controller: 'loginController',
            controllerAs: 'lctrl'
        })
       
        .otherwise({ redirectTo: URL_ROUTE_INDEX });
}
