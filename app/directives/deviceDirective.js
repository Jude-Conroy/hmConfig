"use strict";

angular.module('app').directive('deviceDirective', [ 'deviceService', function (deviceService) {
    return {
        restrict: 'EA',
        templateUrl: 'graphs/deviceConfig.html',
        controller: ('deviceController', function ($scope) {

            $scope.title = "Device Configuration";

            deviceService.deviceConfig().then(function (response) {
                $scope.currentConfig = response.data;
            });

            $scope.submitFrm = function () {

                deviceService.deviceSetting().then(function () {
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