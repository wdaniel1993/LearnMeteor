/**
 * Created by Daniel on 23.09.2015.
 */
angular.module("kiwi-admin").controller("OverviewCtrl", ['$meteor','$meteorCollection', '$state','Organisations','OrganisationManager',
    function($meteor,$meteorCollection,$state, Organisations,OrganisationManager){
        var vm = this;
        vm.organisations = $meteorCollection(Organisations.collection).subscribe('organisations');
        vm.addOrganisation = function () {
            var organisation = {
                title : vm.newOrganisation
            };

            OrganisationManager.addOrganisation(organisation).then(function(){
                vm.newOrganisation = '';
            }, function(error) {
                vm.error = error;
            });

            vm.newOrganisation = '';
        };
    }
]);