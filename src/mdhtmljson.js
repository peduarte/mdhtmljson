/**
* mdhtmljson
*
* @fileoverview Convert markdown to html into a json file
*
* @author Pedro Duarte
* @author http://pedroduarte.me
*
*/

'use strict';

var fs = require('fs');
var request = require('request');
var marked = require('marked');

module.exports = Mdhtmljson;

function Mdhtmljson(url, output) {
  // if there is no output, set default path and filename
  if (!output) { this.output = './mdhtml.json'; }

  // if it doesn't end with .json, add it
  this.output = this.output.match('\.json$') ? this.output : this.output + '.json';

  this.parseMarkdown(url, this.output);
}

Mdhtmljson.prototype.parseMarkdown = function(url, output) {
  request(url, function (error, response, html) {
    if (error) {
      console.log(error + ' :(');
      return false;
    }

    if (response.statusCode == 200) {
      var parsedResult = {
        html: marked(response.body)
      };

      fs.writeFile(output, JSON.stringify(parsedResult, null, 4), function(error){
        if (error) { return console.log('Ooops, are you sure the output directory exists? ' + error); }
        console.log('Your file is ready – ' + output);
      });
    }

    else {
      console.log('Something went wrong, response status code ', response.statusCode);
    }
  });
}
