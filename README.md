#mdhtmljson

Convert a Markdown file to HTML into a JSON file

## Installation
```
npm install mdhtmljson
```

## Usage
```
./node_modules/.bin/mdhtmljson --url=http://urlto.markdown.md
```
>**Note**<br>
>By default, mhhtmljson will save the *output* in the root folder and name it *mdhtml.json*

## Options
### url
*Required*<br>
A string with the URL for a markdown file

### output
*Optional*<br>
The output of the result<br>
Default: `./mdhtml.json`

## Examples
### Default
```
./node_modules/.bin/mdhtmljson --url=http://urlto.markdown.md
```
Will output `mdhtml.json` in your root folder

### Default
```
./node_modules/.bin/mdhtmljson --url=http://urlto.markdown.md --output=./data/readme.json
```
Will output `readme.json` in `./data/`

## Licensing
MIT © 2015 [Pedro Duarte](http://pedroduarte.me)


