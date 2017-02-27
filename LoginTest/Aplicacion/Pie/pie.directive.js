(function () {
    "use strict";

    angular
		.module('pie.Directiva', [])		
		.directive('pie', pieDirectiva);

    function pieDirectiva() {

        var directive = {
            restrict: 'E',
            replace: true,
            scope: true,
            controller: pieController,
            controllerAs: 'cabctrl',
            templateUrl: TEMPLATE_PIE
        };

        return directive;
    }
    pieController.$inject = ['$scope', '$rootScope', '$location', '$filter'];

    function pieController($scope, $rootScope, $location, $filter) {
    }



})();
