**mdhtmljson** is a simple Node module that takes a URL of a *Markdown* file, converts it to *HTML* and outputs it into a *JSON* file.

### Installation
```
npm install mdhtmljson -g
```

### CLI
```
Usage: mdhtmljson <entry file> [options]

Options:

  -h, --help                  output usage information
  -V, --version               output the version number
  -o, --output <output file>  write output to this file – include path (.json file extension not needed)

Example:

  $ mdhtmljson https://github.com/peduarte/wallop/blob/master/README.md -o ./data/docs.json
```

#### Example
```
mdhtmljson http://urlto.markdown.md -o /path/to/output.json
```
The command above will output the following in **/path/to/**:<br>
**output.json**
```json
{
  "html": "<h1>Contents from the markdown</h1><p>...</p>"
}
```

### NodeJS
```js
var mdhtmljson = require('mdhtmljson);

var markdownUrl = 'http://urlto.markdown.md';
var jsonOutput = '/path/to/output.json';

mdhtmljson(markdownUrl, jsonOutput);
```

> **#protip**<br>
> If not **option** is specified, it will output **mdhtml.hson** in your root directory.

## Demo
You can see in action on [wallop site](https://github.com/peduarte/wallop-site) to take the Readme file from [wallop](https://github.com/peduarte/wallop) and use it as documentation on the site too. This way I only have one point of documentation 😁

## Licensing
MIT © 2015 [Pedro Duarte](http://pedroduarte.me)


