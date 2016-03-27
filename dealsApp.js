/**
 * Created by ecao on 3/27/2016.
 */

var express = require('express');
var path = require('path');
var swig = require('swig');
var request = require('request');
var cheerio = require('cheerio');
var _ = require('lodash');
var bodyParser = require('body-parser');
var port = 8000;
//var fs = require('fs');

var app = express();
app.engine('html', swig.renderFile);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    var url = 'http://dealsea.com/';
    var dealsList = [];
    request(url, function(err, resp, body) {
        var $ = cheerio.load(body);
        var list = $('.dealbox');

        list.each(function(idx, item) {

            var desc = $(item).find('.dealcontent strong').text();
            var imgUrl = $(item).find('.prodimage img').attr('src');
            var url = $(item).find('.dealcontent strong a').attr('href');

            dealsList.push({
                desc:desc,
                imgUrl:imgUrl,
                url:url
            })  ;

        });
        //console.log('dealsList - ', dealsList);
        console.log('length - ', dealsList.length);

        return res.render('index', {
            theDealsList:dealsList
        });

    });

});

app.listen(port, function(){
    console.log('running server on port ' + port);
});
