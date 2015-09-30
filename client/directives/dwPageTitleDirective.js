/**
 * Created by Daniel on 26.09.2015.
 */
angular.module("kiwi-admin").directive("dwPageTitle",['PageSettings',function(PageSettings){
    return {
        restrict: 'A',
        templateUrl: 'client/templates/pagetitle.ng.html',
        controllerAs: 'pt',
        controller:  ['$scope', '$rootScope','PageSettings',function($scope,$rootScope,PageSettings) {
            that = this;
            this.siteTitle = PageSettings.title();
            this.title = this.siteTitle;
            PageSettings.subscribeTitle($scope,function(){
                this.siteTitle = PageSettings.title();
            });


            $rootScope.$on('$stateChangeSuccess', function(event, toState) {
                    that.title = (toState.data && toState.data.pageTitle)
                        ? toState.data.pageTitle + " | " + that.siteTitle
                        : that.siteTitle;
            });
        }]
    }
}]);