/**
 * @fileOverview fsjson library
 * @name index.js<lib>
 * @author fkei <kei.topaz@gmail.com>
 * @license MIT
 */

var fs = require('fs');

var jsonminify = require('jsonminify');
var jsonlint = require('jsonlint');
var logger = require('winston');


/**
 * Debug mode
 *
 * @name DEBUG
 * @memberof fsys
 */
var DEBUG = false;

/**
 * The reading JSON data from JSON file (Sync)
 *
 * @name readJsonSync
 * @memberof fsjson
 * @method
 * @param {String} path read file path
 * @param {boolean} minify use jsonminify
 * @param {String} encode file read encode
 */
var readJsonSync = function (path, minify, encode) {
    minify = minify || false;
    encode = encode || 'utf-8';

    var raw = null;

    // read json file
    try {
        raw = fs.readFileSync(path, encode);
    } catch (e) {
        logger.error(e);
        return null;
    }

    // json minify
    if (minify) {
        try {
            raw = jsonminify(raw);
        } catch (e) {
            logger.error(e);
            return null;
        }
    }

    // json parse
    try {
        return JSON.parse(raw);
    } catch (e1) {
        try {
            jsonlint.parse(raw);
        } catch (e2) {
            logger.error('Failed to formatting JSON. path:', path);
            if (DEBUG) {
                console.error(e2);
            }
        }
    }
    return null;
};


/**
 * The reading JSON data from JS file (Sync)
 *
 * @name readFileFnJSONSync
 * @memberof fsys
 * @method
 * @param {String} path load file path
 * @param {String} encode file encode
 * @return {Object} load json data
 */
var readFileFnJSONSync = function (path, encode) {
    encode = encode || 'utf-8';

    // read json file
    var raw = null;
    try {
        raw = fs.readFileSync(path, encode);
    } catch (e) {
        logger.error(e);
        return null;
    }

    try {
        var fn = new Function ('process', 'require', '__filename', '__dirname', 'module', 'exports', "return " + raw);
        return fn(process, require, __filename, __dirname, module, exports);
    } catch (e) {
        logger.error('Failed to read JSON data from JS file. path:', path);
        return null;
    }
};


module.exports = {
    VERSION: '0.1.1',
    readJsonSync: readJsonSync,
    readFileFnJSONSync: readFileFnJSONSync,
    logger: logger,
    DEBUG: DEBUG
};
;
