(function () {
    var fs = require('fs');

    throw new Error("FAILURE"); // throw error!!!

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
