"use strict";

angular.module('app')
    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider
        .when("/audioZoneView", {
            template : "<audio-zone-directive></audio-zone-directive>"
        })
        .when("/wifiView", {
            template : "<wifi-directive></wifi-directive>"
        })
        .when("/deviceView", {
            template : "<device-directive></device-directive>"
        })
            .otherwise({ redirectTo: '/' });

}]).run(function($rootScope) {
    $rootScope.venueid = location.search.split("&")[0].replace("?","").split("=")[1];
});