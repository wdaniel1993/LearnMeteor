/**
 * Created by Daniel on 26.09.2015.
 */
angular.module('kiwi-admin').factory('Page', function() {
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
    return {
        title: function() { return title; },
        setTitle: function(newTitle) { title = newTitle },
        navigation: function() { return navigation; },
        setNavigation: function(newNavigation) { navigation = newNavigation}
    };
});