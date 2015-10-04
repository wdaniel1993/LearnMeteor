/**
 * Created by Daniel on 23.09.2015.
 */
angular.module("kiwi-admin").controller("OverviewCtrl", ['$meteor', '$state','Organisations','OrganisationManager',
    function($meteor,$state, Organisations,OrganisationManager){
        var vm = this;
        vm.organisations = $meteor.collection(Organisations.collection).subscribe('organisations');
        vm.addOrganisation = function () {
            var organisation = {
                title : vm.newOrganisation
            };

            OrganisationManager.addOrganisation(organisation).then(angular.noop, function(error) {
                vm.error = error;
            });

            vm.newOrganisation = '';
        };

        vm.removeOrganisation = function (organisation) {
            OrganisationManager.removeOrganisation(organisation).then(angular.noop, function(error) {
                vm.error = error;
            });
        };
    }
]);