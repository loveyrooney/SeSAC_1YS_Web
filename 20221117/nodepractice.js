const os = require("os");
console.log("os-1 :" + os.freemem());
console.log("os-2 :" + os.totalmem());
console.log("os-3 :" + os.homedir());

const path = require("path");
console.log("path-1 :" + path.sep);
console.log("path-2 :" + path.extname(__filename));
console.log(__dirname.split(path.sep));

const url = require("url");
var string = new url.URL("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=sesac");
console.log(string.searchParams.keys());
console.log(string.searchParams.values());
string.searchParams.delete("sm");
console.log(string.searchParams.keys());
