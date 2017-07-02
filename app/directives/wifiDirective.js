/**
 * Created by Jude on 15/12/2016.
 */
"use strict";

var module = angular.module('app');

module.directive('wifiDirective', ['wifiService', function (wifiService) {
    return {
        scope: {
            model: '=ngModel',
            name: '@',
            email: '@'
        },
        templateUrl: 'graphs/wifiConfig.html',
        controller: ('wifiController', function ($scope) {
            $scope.title = "Wifi Configuration";

            $scope.selSsid = "";
            $scope.selChannel = "";
            $scope.selAuth = "";
            $scope.selPwd = "";

            wifiService.wifiConfigCur().then(function (response) {
                $scope.selSsid = response.data[1].ssid;
                $scope.selChannel = response.data[1].channel;
                $scope.selAuth = response.data[1].auth;
                $scope.wifiData = response.data[0];
            });

            $scope.submitFrm = function () {

                wifiService.wifiSaveConfig($scope.selSsid,
                    $scope.selChannel, $scope.selAuth, $scope.selPwd).then(function (response) {

                    $.notify({
                        title: '<strong>Configuration: </strong>',
                        message: "<strong>Success</strong>"
                    }, {
                        type: 'success'
                    }, {
                        animate: {
                            enter: 'animated fadeInRight',
                            exit: 'animated fadeOutRight'
                        }
                    });
                })
            };
        }),
        link: function ($scope, element, attrs, ctrl) {

        }
    }
}]);

