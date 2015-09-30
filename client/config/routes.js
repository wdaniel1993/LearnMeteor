/**
 * Created by Daniel on 24.09.2015.
 */
angular.module('kiwi-admin').config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){

    $stateProvider
        .state('overview', {
            url: '/overview',
            templateUrl: 'client/children/views/overview.ng.html',
            controller: 'OverviewCtrl',
            controllerAs: 'ov',
            data: {
                pageTitle: 'Overview'
            }
        })
        .state('login', {
            url: '/login',
            templateUrl: 'client/users/views/login.ng.html',
            controller: 'LoginCtrl',
            controllerAs: 'lc',
            data: {
                pageTitle: 'Login'
            }
        })
        .state('register',{
            url: '/register',
            templateUrl: 'client/users/views/register.ng.html',
            controller: 'RegisterCtrl',
            controllerAs: 'rc',
            data: {
                pageTitle: 'Register'
            }
        })
        .state('logout', {
            url: '/logout',
            resolve: {
                "logout": ['$meteor', '$state', function($meteor, $state) {
                    return $meteor.logout().then(function(){
                        $state.go('overview');
                    }, function(err){
                        console.log('logout error - ', err);
                    });
                }]
            },
            data: {
                pageTitle: 'Logout'
            }
        });

    $urlRouterProvider.otherwise("/overview");
}]);