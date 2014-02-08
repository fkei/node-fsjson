node-fsjson
==============

![Travis CI](https://travis-ci.org/fkei/node-fsjson.png?branch=master)


# About

ファイルシステムにある、JSONファイル、JSファイル(return JSON Object) をロードするライブラリ

> JSONファイルの文字列内にコメントを挿入する事ができます
> [@requirement: jsonminify](https://github.com/fkei/JSON.minify)

> JSファイル内のスクリプトでは、node.jsの機能が利用できます。

# Install

```sh
$ npm install -g fsjson
```

# Test

```sh
$ npm test
```

# Used

## API

```
var fsjson = require('fsjson');

var json = fsjson.readJsonSync('PATH'); // JSON file

var json_js = fsjson.readFileFnJSONSync('PATH'); // JS file
```

## File format

### Load JSON file format

```
// start
{
  "author": { // author
    "name": "fkei", /** author.name **/
    "email": "kei.topaz@gmail.com"
  },
  "contributors": [],
  /**
   * homepage
   */
  "homepage": "https://github.com/fkei/fsjson",
  "license": {
    "type": "MIT",
    "url": "https://raw.github.com/fkei/fsjson/master/LICENSE"
  }
}
// end

```

### Load JSON file format

```javascript
(function () {
    var fs = require('fs');

    console.log(process.cwd());

    return {
        "author": { // author
            "name": "fkei", /** author.name **/
            "email": "kei.topaz@gmail.com"
        },
        "contributors": [],
        /**
         * homepage
         */
        "homepage": "https://github.com/fkei/fsjson",
        "license": {
            "type": "MIT",
            "url": "https://raw.github.com/fkei/fsjson/master/LICENSE"
        }
    }
}());

```


LICENSE

The MIT License (MIT)

@see : [LICENSE](https://raw.github.com/fkei/node-fsjson/master/LICENSE)
