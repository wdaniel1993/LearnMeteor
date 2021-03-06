/**
 * Created by Daniel on 26.09.2015.
 */
angular.module("kiwi-admin").directive("dwTitle",['PageSettings',function(PageSettings){
    return {
        restrict: 'E',
        templateUrl: 'client/templates/title.ng.html',
        controllerAs: 'title',
        controller:  ['$scope','PageSettings',function($scope,PageSettings) {
            this.title = PageSettings.title();
            PageSettings.subscribeTitle($scope,function(){
                this.title = PageSettings.title();
            });
        }]
    }
}]);