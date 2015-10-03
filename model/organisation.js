/**
 * Created by Daniel on 30.09.2015.
 */
angular.module("kiwi-admin-server").service('Organisations', function() {

    this.collection = new Meteor.Collection('organisations');

    var schema = new SimpleSchema({
        title: {
            type: String,
            label: "Title",
            max: 200
        }
    });

    this.collection.attachSchema(schema);
});