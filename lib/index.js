"use strict";

const fs = require("fs");

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
    let arr = content.split("\n")
    
    arr.forEach((item, index) => {
        arr[index] = arr[index].replace(/\s+$/, '')
    })
    
    let noSpaceString = arr.join("\n")

    return fs.writeFile(filePath, noSpaceString, cb);
};
