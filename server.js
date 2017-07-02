const express = require('express');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const path = require('path');
const azConfig = require('./server/audioZoneConfig.js');
const wifiConfig = require('./server/wifiConfig.js');
const deviceConfig = require('./server/deviceConfig.js');
const linux = require("./server/readFromScriptFile.js");


app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static(path.join(__dirname + '/Content')));
app.use(express.static(path.join(__dirname + '/ext-modules')));
app.use(express.static(path.join(__dirname + '/app')));
app.use(express.static(path.join(__dirname + '/node_modules')));
app.use(express.static(path.join(__dirname + '/fonts')));
app.use(express.static(path.join(__dirname + '/images')));
app.use(express.static(path.join(__dirname + '/server')));
app.use(express.static(path.join(__dirname + '/')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html')); // load the single view file (angular will handle the page changes on the front-end)
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
    });
});

app.get('/dCCurrent', function(request, response) {
    deviceConfig.deviceConfigCur(function(callback){
        response.send(callback);
    });
});

app.get('/dCSelected', function(request, response) {
    linux.gitCheck();
});

app.get('/audioZoneOptions', function(request, response) {
    azConfig.audioZoneOptions(function(available, selected){
        response.send([available, selected]);
    });
});

app.get('/audioZoneConfig', function(request, response) {
    azConfig.audioZoneConfig(request.query.ssid, request.query.channel, function(data){
        response.send(data);
    });
});

app.get('/wifiConfigCurrent', function(request, response) {
    wifiConfig.wifiConfigQuery(function(available, selected){
        response.send([available, selected]);
    });
});

app.get('/wifiConfigSelected', function(request, response) {
    wifiConfig.wifiConfigSel(request.query.selSsid, request.query.selChannel,
        request.query.selAuth, request.query.selPwd, function(data){
        response.send(data);
    });
});

const port = 3000;
const ipAddress = "127.0.0.1";

http.listen(port, ipAddress, function(err){
    if (err) {
       return console.log('something bad happened', err)
    }
   console.log('server is listening on ' + port)
});