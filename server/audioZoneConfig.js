/**
 * Created by jude on 28/11/2016.
 */

(function(){
    module.exports.audioZoneOptions =
        function (callback) {

            var currentValues = {
                ssid:"audioZone1234",
                channel: 9
            };

            var audioDTO = [
                {
                    ssid:"audioZone",
                    channel: 6
                },
                {
                    ssid:"btopenzone",
                    channel: 6
                },
                {
                    ssid:"thispubsssid",
                    channel: 12
                },
                {
                    ssid:"someotherssid",
                    channel: 13
                },
                {
                    ssid:"wibble",
                    channel: 19
                },

            ];

            callback(audioDTO, currentValues);
        };
})();

(function(){
    module.exports.audioZoneConfig =
        function (ssid, channel, callback) {
            // This is where I set the config file
            var data = "Save successful";
            callback(data);
        };
})();






