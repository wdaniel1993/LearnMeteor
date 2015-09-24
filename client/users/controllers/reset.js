/**
 * Created by Daniel on 23.09.2015.
 */
angular.module("kiwi-admin").controller("ResetCtrl", ['$meteor', '$state',
    function ($meteor, $state) {
        var vm = this;

        vm.credentials = {
            username: ''
        };

        vm.error = '';

        vm.reset = function () {
            $meteor.forgotPassword(vm.credentials).then(
                function () {
                    $state.go('overview');
                },
                function (err) {
                    vm.error = 'Error sending forgot password email - ' + err;
                }
            );
        };
    }
]);