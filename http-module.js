const http = require("http");

const server = http.createServer((req, res) => {
   // res.writeHead(201,{ "Content-Type": "text/html"});
    res.write("<h1>Hello</h1>");
    res.end();
});

module.exports = { server };