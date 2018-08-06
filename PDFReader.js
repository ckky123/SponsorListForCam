



var PdfReader = require("pdfreader").PdfReader;
new PdfReader().parseFileItems("sample.pdf", function (err, item) {
    if (item && item.text)
        console.log(item.text);
});