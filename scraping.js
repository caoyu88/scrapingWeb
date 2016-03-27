/**
 * Created by ecao on 3/27/2016.
 */

var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();
var port = 8000;

var url = 'http://dealsea.com/';
//var dest = fs.createWriteStream('./downloads/dealsea.html');

//request(url, function(err, resp, body){
//    if(err){
//        console.warn(err);
//    } else {
//        //console.log('resp - ', resp);
//        console.log('body - ', body);
//    }
//});

//request(url)
//    .pipe(dest)
//    .on('finish', function(){
//        console.log('done on '+ new Date());
//    })
//    .on('error', function(err){
//        console.log('err - ', err);
//    });

//request(url).pipe(dest);
//dest.on('finish', function(){
//    console.log('done on '+ new Date());
//})

request(url, function(err, resp, body){
    var $ = cheerio.load(body);
    var dealsList = $('.dealbox .dealcontent strong').text();

    console.log('dealsList - ', dealsList);

});



//app.listen(port);
//console.log('the server is listening on '+port);
