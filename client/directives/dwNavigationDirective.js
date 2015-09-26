/**
 * Created by Daniel on 26.09.2015.
 */
angular.module("kiwi-admin").directive("dwNavigation",[function(){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: function(elem,attrs) {
            return 'client/templates/navigation-' + (attrs.dwType ? attrs.dwType : 'menubar') +'.ng.html'
        },
        controllerAs: 'navigation',
        controller:  ['$scope','$mdMenu','PageSettings','$state',function($scope,$mdMenu,PageSettings,$state) {
            this.navigation = PageSettings.navigation();
            PageSettings.subscribeNavigation($scope,function(){
                this.navigation = PageSettings.navigation();
            });
            this.hide = $mdMenu.hide;
            this.gotoState = function(state){
                $state.go(state);
            }
        }]
    }
}]);