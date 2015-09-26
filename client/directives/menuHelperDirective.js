/**
 * Created by Daniel on 26.09.2015.
 */
angular.module("kiwi-admin").directive("menuHelper",['$mdSidenav','$mdUtil',function($mdSidenav, $mdUtil){
    return {
        restrict: 'A',
        link:  function(scope, element, attrs, tabsCtrl) {
            scope.toggleLeft = buildToggler('left');
            /**
             * Build handler to open/close a SideNav; when animation finishes
             * report completion in console
             */
            function buildToggler(navID) {
                var debounceFn = $mdUtil.debounce(function () {
                    $mdSidenav(navID)
                        .toggle();
                }, 200);
                return debounceFn;
            }
        }
    }
}]);