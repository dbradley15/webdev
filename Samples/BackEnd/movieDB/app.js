/*

Description: Simple API practice, and template for future apps
             This application uses the open movie database, and the
             user searches for movies using words that can be found in
             the title.
  
*/

var express = require('express');
var app = express();
var request = require('request');
app.set("view engine", "ejs");

//Port and IP
var port = process.env.PORT;
var ip =process.env.IP;

//Default URL information
var baseurl = 'http://www.omdbapi.com/?s=';
var key = '&apikey=thewdb';

app.get('/', function(req, res){
    res.render('search');
});

app.get('/results', function(req, res) {
    var searchbar = req.query.searchbar;
    request(baseurl+searchbar+key, function(error, response, body) {
       if(!error && response.statusCode == 200) {
           var data = JSON.parse(body);
           res.render('results', {data: data});
       }
   });
});




app.listen(port, ip, function() {
    console.log("Server is listening...");
});