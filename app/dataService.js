/**
 * Created by jude on 25/11/2016.
 */
"use strict";

angular.module('app').factory("audioZoneOptionsService", function($http) {
    var factory = {};

    factory.azOptions = function () {
        return $http.get("/audioZoneOptions");
    };

    return factory;
});

angular.module('app').factory("audioZoneConfigService", function($http) {
    var factory = {};

    factory.azConfig = function (ssid, channel) {
         var data = {
            updateSsid: ssid,
            updateChannel:channel
         };

         var config = {
            params: data,
            headers: {'Accept': 'application/json'}
         };

         return $http.get("/audioZoneConfig", config);
     };

    return factory;
});

angular.module('app').factory("wifiService", function($http) {

    var factory = {};

    factory.wifiConfigCur = function() {

        var data = { };

        var config = {
            params: data,
            headers : {'Accept' : 'application/json'}
        };

        return $http.get("/wifiConfigCurrent" , config);
    };

    factory.wifiSaveConfig = function(selSsid, selChannel, selAuth, selPwd) {

        var data = {
            ssid: selSsid,
            channel: selChannel,
            auth: selAuth,
            pwd: selPwd
        };

        var config = {
            params: data,
            headers : {'Accept' : 'application/json'}
        };

        return $http.get("/wifiConfigSelected" , config);
    };

    return factory;
});

angular.module('app').factory("deviceService", function($http) {

    var factory = {};

    factory.deviceConfig = function () {

        var data = {  };

        var config = {
            params: data,
            headers: {'Accept': 'application/json'}
        };

        return $http.get("/wifiConfigSelected", config);
    };

    factory.deviceSetting = function () {

        var data = {

        };

        var config = {
            params: data,
            headers: {'Accept': 'application/json'}
        };

        return $http.get("/wifiConfigSelected", config);
    };
    return factory;
});

