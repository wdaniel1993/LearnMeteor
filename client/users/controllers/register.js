/**
 * Created by Daniel on 23.09.2015.
 */
angular.module("kiwi-admin").controller("RegisterCtrl", ['$meteor', '$state',
    function ($meteor, $state) {
        var vm = this;

        vm.credentials = {
            username: '',
            password: ''
        };

        vm.error = '';

        vm.register = function () {
            $meteor.createUser(vm.credentials).then(
                function () {
                    $state.go('overview');
                },
                function (err) {
                    vm.error = 'Registration error - ' + err;
                }
            );
        };
    }
]);