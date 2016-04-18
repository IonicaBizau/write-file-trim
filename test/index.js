"use strict";

const tester = require("tester")
    , write = require("..")
    , fs = require("fs")
    ;

tester.describe("write file", t => {
    t.should("write content without trailing spaces", () => {
        let path = `${__dirname}/test.txt`;
        write(path, " foo    \t\n bar  \t\t", err => {
            t.expect(err).toBe(null);
            fs.readFile(path, "utf-8", (err, res) => {
                t.expect(err).toBe(null);
                t.expect(res).toBe(" foo\n bar");
            });
        });
    });
});
