//var os = require('os');
var fs = require("fs");
//os.platform(); // 'darwin'
//os.release(); //'10.8.0'
var FILE_INFO = process.env.HOME + "/Library/Application Support/Google/Chrome/Default/Bookmarks";
var contents = fs.readFileSync(FILE_INFO);
// Define to JSON type
var jsonContent = JSON.parse(contents);

console.log("User Name:", jsonContent);

//console.log(process.env.HOME);