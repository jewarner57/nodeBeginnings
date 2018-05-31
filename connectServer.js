var connect = require('connect');
var http = require('http');

var app = connect();

function about(request, response, next) {
  console.log("About page");
}

function forum(request, response, next) {
  console.log("forum page");
}

app.use('/about', about);
app.use('/forum', forum);

http.createServer(app).listen(8888);
console.log("Server is running.... Away")
