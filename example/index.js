"use strict";

const writeFileTrim = require("../lib");

writeFileTrim("test.txt", "foo   \nbar  \t \t", (err, data) => {
    console.log(err || "Saved.");
    // File content (without any trailing spaces/tabs):
    // foo
    // bar
});
