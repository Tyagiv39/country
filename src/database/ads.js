var cheerio=require('cheerio');
var request=require('request');
var cron=require('node-cron');
  var ary =new Array();
const url="https://www.worldometers.info/geography/how-many-countries-in-asia/";
cron.schedule("*/30 * * * * *",function(){
   request(url,function(err,resp,body){
if (err) throw err;
  const $=cheerio.load(body);
   $('tbody a').each(function(i,element){
    const $element=$(element);
  var ske=$element.text();
ary.push(ske);
 module.exports = ary;
    });
  });
  ary=[];
});
