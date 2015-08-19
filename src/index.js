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

module.exports = init;

function init(url, output) {
  /**
   * if there is no output, set default path and filename
   * @param  {string} !output output of json
   * @return {string}         default output including .json extension if not set
   */
  if (!output) {
    output = './mdhtml.json';
    output = output.indexOf('.json') > -1 ? output : output + '.json';
  }

  parseMarkdown(url, output);
}

function parseMarkdown(url, output) {
  request(url, function (error, response, html) {
    if (error) {
      return console.log(error + ' :(');
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
