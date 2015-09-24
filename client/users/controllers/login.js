/**
 * Created by Daniel on 23.09.2015.
 */
angular.module("kiwi-admin").controller("LoginCtrl", ['$meteor', '$state',
    function ($meteor, $state) {
        var vm = this;

        vm.credentials = {
            username: '',
            password: ''
        };

        vm.error = '';

        vm.login = function () {
            $meteor.loginWithPassword(vm.credentials.username, vm.credentials.password).then(
                function () {
                    $state.go('overview');
                },
                function (err) {
                    vm.error = 'Login error - ' + err;
                }
            );
        };
    }
]);