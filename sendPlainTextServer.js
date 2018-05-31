var http = require('http');

http.createServer(onRequest).listen(8888);
console.log("Server Started");

function onRequest(request, response) {
  console.log("User made a request" + request.url);
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("A solid response");
  response.end();
}
