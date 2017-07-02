/**
 * Created by jude on 28/11/2016.
 */
(function(){
    module.exports.wifiConfigQuery =
        function (callback) {

            var currentValues = {
                ssid:"audioZone1234",
                channel: 9,
                auth: "basic"
            };

            var audioDTO = [
                {
                    ssid:"audioZone",
                    channel: 6,
                    auth: "basic"
                },
                {
                    ssid:"btopenzone",
                    channel: 6,
                    auth: "basic"
                },
                {
                    ssid:"thispubsssid",
                    channel: 12,
                    auth: "basic"
                },
                {
                    ssid:"someotherssid",
                    channel: 13,
                    auth: "basic"
                },
                {
                    ssid:"wibble",
                    channel: 19,
                    auth: "basic"
                },

            ];
            callback(audioDTO, currentValues);
    }

        module.exports.wifiConfigSel =
            function (selSsid, selChannel, selAuth, selPwd, callback) {

                callback("Success");
            }
}
)();


