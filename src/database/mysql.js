var cheerio=require('cheerio');
var request=require('request');
var mysql=require('mysql');
var cron=require('node-cron');
const parse = require('body-parser');

var con=mysql.createConnection({
  host:"localhost",
  user:"",
  password:"",
  database:"mydb"
});


con.connect(function(err,result){
if(err) throw err;
console.log('sqlconnected');
cron.schedule("*/40 * * * * *",function(){
var ary=require('./ads');
ary.forEach((value,index,array) => {
  var sql="UPDATE country SET countryname='"+value+"' WHERE id='"+(index)+"'";
  con.query(sql,function (err,result) {
     });
});
con.query("SELECT countryname FROM country" ,function (err,result){
  if (err) throw err;
  module.exports=(result);});
});});
