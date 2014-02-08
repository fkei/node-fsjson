/**
 * @fileOverview Test case: lib/index.js
 * @name test-index.js<tests>
 * @author fkei <kei.topaz@gmail.com>
 * @license MIT
 */

var fsjson = require('../lib');
var chai = require('chai');
var expect = chai.expect;

var JSON_FILE_SUCCESS = __dirname + '/misc/json-success.json';
var JSON_FILE_FAILURE = __dirname + '/misc/json-failure.json';
var JS_FILE_SUCCESS   = __dirname + '/misc/json-success.js';
var JS_FILE_FAILURE   = __dirname + '/misc/json-failure.js';


describe('index.js', function () {

    it('VERSION', function () {
        expect(fsjson.VERSION).be.ok;
    });

    it('readJsonSync parse error', function () {
        var json = fsjson.readJsonSync(JSON_FILE_FAILURE);
        expect(json === null).be.ok;
    });

    it('readJsonSync', function () {
        var json = fsjson.readJsonSync(JSON_FILE_SUCCESS, true);
        expect(json).be.ok;
    });

    it('readFileFnJSONSync parse error', function () {
        var json = fsjson.readFileFnJSONSync(JS_FILE_FAILURE);
        expect(json === null).be.ok;
    });

    it('readFileFnJSONSync', function () {
        var json = fsjson.readFileFnJSONSync(JS_FILE_SUCCESS);
        expect(json).be.ok;
    });

});
