/**
 * Created by Daniel on 01.10.2015.
 */
angular.module("kiwi-admin-server").config(['ServerAPIProvider', '$injector',function(ServerAPIProvider, $injector) {
    if($injector.has('Data'))
        ServerAPIProvider.register('Data');
}]);

angular.bootstrap(['kiwi-admin-server']);