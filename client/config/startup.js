/**
 * Created by Daniel on 24.09.2015.
 */
angular.module('kiwi-admin').config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);

    Accounts.ui.config({
        passwordSignupFields: "USERNAME_ONLY"
    });
}]);

function onReady() {
    angular.bootstrap(document, ['kiwi-admin']);
}

if (Meteor.isCordova) {
    angular.element(document).on("deviceready", onReady);
} else {
    angular.element(document).ready(onReady);
}