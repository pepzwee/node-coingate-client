"use strict";

const configuration = require('../config/configure');
const utils = require("./utils");

var configure = exports.configure = function (options) {
    configuration.defaultOptions = Object.assign({}, configuration.defaultOptions, options);
    console.log(configuration.defaultOptions);
};
