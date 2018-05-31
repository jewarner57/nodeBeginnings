var path = require("path");
var websiteHome = "Desktop/Node.js//app.js";

//normalizes slashes in the file path
console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteHome));
console.log(path.basename(websiteHome));
console.log(path.extname(websiteHome));

//directory file path
console.log(__dirname);
//full path of current file 
console.log(__filename);
