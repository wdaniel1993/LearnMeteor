/**
 * Created by Daniel on 26.09.2015.
 */
angular.module("kiwi-admin").directive("dwNavigation",[function(){
    return {
        restrict: 'E',
        controllerAs: 'page',
        controller:  ['$scope','PageSettings',function($scope,PageSettings) {
            this.navigation = PageSettings.navigation();
            PageSettings.subscribeNavigation($scope,function(){
                this.navigation = PageSettings.navigation();
            });
        }]
    }
}]);