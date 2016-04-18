# write-file-trim [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Travis](https://img.shields.io/travis/IonicaBizau/write-file-trim.svg)](https://travis-ci.org/IonicaBizau/write-file-trim/) [![Version](https://img.shields.io/npm/v/write-file-trim.svg)](https://www.npmjs.com/package/write-file-trim) [![Downloads](https://img.shields.io/npm/dt/write-file-trim.svg)](https://www.npmjs.com/package/write-file-trim) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Write the content in a file after removing the trailing spaces.


## :cloud: Installation
    
```sh
$ npm i --save write-file-trim
```

            
## :clipboard: Example

        

```js
const writeFileTrim = require("write-file-trim");

writeFileTrim("test.txt", "foo   \nbar  \t \t", (err, data) => {
    console.log(err || "Saved.");
    // File content (without any trailing spaces/tabs):
    // foo
    // bar
});
```
    
## :memo: Documentation
        
### `writeFileTrim(filePath, content, cb)`
Write the content in a file after removing the trailing spaces.

#### Params
- **String** `filePath`: The file path.
- **String** `content`: The content to write.
- **Function** `cb`: The callback function.

        
## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :scroll: License
    
[MIT][license] © [Ionică Bizău][website]
    
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
