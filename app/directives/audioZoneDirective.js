"use strict";

angular.module('app').directive('audioZoneDirective', ['audioZoneOptionsService', 'audioZoneConfigService', function (audioZoneOptionsService, audioZoneConfigService) {
    return {
        templateUrl: 'graphs/audioZoneConfig.html',
        controller: ('audioZoneController', function ($scope, NgTableParams)
        {
            $scope.title = "Audio Zone Configuration";

            $scope.selectedSsid = "";
            $scope.selectedChannel = "";

            var $data = [];

            audioZoneOptionsService.azOptions().then(function (response) {
                $scope.ssid = response.data[1].ssid;
                $scope.channel = response.data[1].channel;
                $scope.azData = response.data[0];;
            });

            $scope.submitFrm = function () {

                audioZoneConfigService.azConfig($scope.selectedSsid,
                    $scope.selectedChannel).then(function (response) {

                    $.notify({
                        title: '<strong>Configuration: </strong>',
                        message: "<strong>successful</strong>"
                    }, {
                        type: 'success'
                    }, {
                        animate: {
                            enter: 'animated fadeInRight',
                            exit: 'animated fadeOutRight'
                        }
                    });
            })};
        }),
        link: function ($scope, element, attrs, ctrl) {

        }
    }
}]);