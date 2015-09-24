/**
 * Created by Daniel on 24.09.2015.
 */
angular.module('kiwi-admin').config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){

    $stateProvider
        .state('overview', {
            url: '/overview',
            templateUrl: 'client/children/views/overview.ng.html',
            controller: 'OverviewCtrl',
            controllerAs: 'ov'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'client/users/views/login.ng.html',
            controller: 'LoginCtrl',
            controllerAs: 'lc'
        })
        .state('register',{
            url: '/register',
            templateUrl: 'client/users/views/register.ng.html',
            controller: 'RegisterCtrl',
            controllerAs: 'rc'
        })
        .state('resetpw', {
            url: '/resetpw',
            templateUrl: 'client/users/views/reset-password.ng.html',
            controller: 'ResetCtrl',
            controllerAs: 'rpc'
        })
        .state('logout', {
            url: '/logout',
            resolve: {
                "logout": ['$meteor', '$state', function($meteor, $state) {
                    return $meteor.logout().then(function(){
                        $state.go('parties');
                    }, function(err){
                        console.log('logout error - ', err);
                    });
                }]
            }
        });

    $urlRouterProvider.otherwise("/overview");
}]);