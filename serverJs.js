const http = require("http");

const PORT1 = 7000;
const PORT2 = 7500;

const server1 = http.createServer(
    function(request, response) {
         response.end("I like the way you type " +  request.url);
    }
);

const server2 = http.createServer(
    function(request, response) {
        response.end("Fuck you bitch! " + request.ur);
    }
);

server1.listen(PORT1);
server2.listen(PORT2);