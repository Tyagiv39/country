const express = require('express');
const app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
const path =require('path');
var cron=require('node-cron');
var sk =  require('./database/ads');
var sd = require('./database/mysql');
app.use(express.static(path.join(__dirname, 'node_modules')));
const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}
app.get('/',function (req, res,next){
   res.sendFile(__dirname +'/'+'database/fron.html' );
  });

io.on('connect',function(socket){
  console.log('1 connected');
cron.schedule("*/45 * * * * *",function(){
    var result=require('./database/mysql');
    socket.emit('hello',result);
  });
});
  server.listen(8080,function(){
    console.log('listening on port 8080');

  });
