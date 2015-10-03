/**
 * Created by Daniel on 01.10.2015.
 */
angular.module("kiwi-admin-server").service('OrganisationManager',['Organisations',function(Organisations) {
    this.addTodo = function (organisation) {
        if (organisation.title.length < 3) {
            throw new Meteor.Error(500, undefined, 'Title must be longer than 3 letters');
        }
        else {
            Organisations.collection.insert(organisation);
        }
    };

    Meteor.publish('organisations', function () {
        return Todos.collection.find({});
    });
}]).config(['ServerAPIProvider',function (ServerAPIProvider) {
    ServerAPIProvider.register('OrganisationManager');
}]);