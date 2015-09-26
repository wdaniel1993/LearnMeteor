/**
 * Created by Daniel on 26.09.2015.
 */
angular.module('kiwi-admin').factory('PageSettings', function() {
    var scopes = [];

    var title = 'KIWI Admin Portal';
    var navigation = [
        {
            title: 'Stammdatenverwaltung',
            subnavi: [
                {
                    title: 'Standorte',
                    state: 'master.site'
                },
                {
                    title: 'Gruppen',
                    state: 'master.group'
                },
                {
                    title: 'Zeitplan',
                    state: 'master.timetable'
                }
            ]
        },
        {
            title: 'Mitarbeiterverwaltung',
            subnavi: [
                {
                    title: 'Mitarbeiterstammdaten',
                    state: 'staff.data'
                },
                {
                    title: 'Gruppenzuordnung',
                    state: 'staff.group'
                },
                {
                    title: 'Organigramm',
                    state: 'staff.hierarchy'
                }
            ]
        },
        {
            title: 'Kinderverwaltung',
            subnavi: [
                {
                    title: 'Kinderstammdaten',
                    state: 'child.data'
                },
                {
                    title: 'Gruppenzuordnung',
                    state: 'child.group'
                },
                {
                    title: 'Galerie',
                    state: 'child.gallery'
                }
            ]
        }
    ];
    var titleChange = 'title-changed';
    var navigationChange = 'navigation-changed';

    var notify = function (event) {
        scopes.forEach(function () {
            scope.$emit(title);
        });
    };

    var subscribe = function (scope, callback, event) {
        var handler = scope.$on(event, callback);
        scopes.push(scope);
        scope.$on('$destroy', function () {
            handler();
            var index = scopes.indexOf(scope);
            scopes.splice(index, 1);
        });
    };

    return {
        title: function() { return title; },
        setTitle: function(newTitle) {
            title = newTitle;
            notify(titleChange);
        },
        navigation: function() { return navigation;},
        setNavigation: function(newNavigation) {
            navigation = newNavigation;
            notify(navigationChange);
        },
        subscribeTitle: function (scope, callback) {
            subscribe(scope,callback,titleChange);
        },
        subscribeNavigation: function (scope, callback) {
            subscribe(scope,callback,navigationChange);
        }
    };
});