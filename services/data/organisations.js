/**
 * Created by Daniel on 01.10.2015.
 */
angular.module("kiwi-admin-server").service('OrganisationManager',['Organisations',function(Organisations){
    this.addOrganisation = function (organisation) {
        if (organisation.title.length < 3) {
            throw new Meteor.Error(500, undefined, 'Title must be longer than 3 letters');
        }
        else {
            Organisations.collection.insert(organisation);
        }
    };

    this.removeOrganisation = function (organisation) {
        Organisations.collection.remove({_id: organisation._id});
    };

    if(Meteor.isServer) {
        Meteor.publish('organisations', function () {
            return Organisations.collection.find({});
        });
    }
}]);

if(Meteor.isServer){
    angular.module("kiwi-admin-server").config(['ServerAPIProvider',function(ServerAPIProvider) {
        ServerAPIProvider.register('OrganisationManager');
    }]);
}
