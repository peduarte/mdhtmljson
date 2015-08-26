/**
* mdhtmljson
*
* @fileoverview Convert markdown to html into a json file
*
* @author Pedro Duarte
* @author http://pedroduarte.me
*
*/

(function(global){

  'use strict';

  var fs = require('fs');
  var request = require('request');
  var marked = require('marked');

  function Mdhtmljson(url, output) {
    // if there is no output, set default path and filename
    if (!output) { output = './mdhtml.json'; }

    // if it doesn't end with .json, add it
    this.output = output.match('\.json$') ? output : output + '.json';

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

  // Exports to multiple environments
  if(typeof define === 'function' && define.amd){
    define(function () { return Mdhtmljson; });
  } else if (typeof module !== 'undefined' && module.exports){
    module.exports = Mdhtmljson;
  } else {
    global['Mdhtmljson'] = Mdhtmljson;
  }

}(this));
