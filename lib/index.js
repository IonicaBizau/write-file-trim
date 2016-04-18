"use strict";

const fs = require("fs")
    , removeTrailingSpaces = require("remove-trailing-spaces")
    ;

/**
 * writeFileTrim
 * Write the content in a file after removing the trailing spaces.
 *
 * @name writeFileTrim
 * @function
 * @param {String} filePath The file path.
 * @param {String} content The content to write.
 * @param {Function} cb The callback function.
 */
module.exports = function writeFileTrim (filePath, content, cb) {
    return fs.writeFile(filePath, removeTrailingSpaces(content), cb);
};
