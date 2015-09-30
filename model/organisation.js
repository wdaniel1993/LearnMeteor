/**
 * Created by Daniel on 30.09.2015.
 */
angular.module("kiwi-admin").service('Organisations', function() {
    this.collection = new Meteor.Collection('organisations');
});