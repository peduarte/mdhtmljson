#mdhtmljson

Convert a Markdown file to HTML into a JSON file

## Installation
```
npm install mdhtmljson
```

## Usage
### Default
```
./node_modules/.bin/mdhtmljson --url=http://urlto.markdown.md
```
Will output `mdhtml.json` in your root folder:
***mdhtml.json***
```
{
  html: "<h1>Contents from the markdown</h1><p>...</p>"
}
```

### Default
```
./node_modules/.bin/mdhtmljson --url=http://urlto.markdown.md --output=./data/readme.json
```
Will output `readme.json` in `./data/`

## Options
### url
*Required*<br>
A string with the URL for a markdown file

### output
*Optional*<br>
The output of the result<br>
Default: `./mdhtml.json`

## Demo
You can see in action on [wallop site](https://github.com/peduarte/wallop-site) to take the Readme file from [wallop](https://github.com/peduarte/wallop) and use it as documentation on the site too. This way I only have one point of documentation 😁

## Licensing
MIT © 2015 [Pedro Duarte](http://pedroduarte.me)


