/**
 * Created by Daniel on 26.09.2015.
 */
angular.module("kiwi-admin").directive("dwNavigation",[function(){
    return {
        restrict: 'E',
        templateUrl: 'client/templates/navigation.ng.html',
        controllerAs: 'navigation',
        controller:  ['$scope','$mdMenu','PageSettings',function($scope,$mdMenu,PageSettings) {
            this.navigation = PageSettings.navigation();
            PageSettings.subscribeNavigation($scope,function(){
                this.navigation = PageSettings.navigation();
            });
            this.hide = $mdMenu.hide;
        }]
    }
}]);