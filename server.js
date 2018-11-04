const http = require('http');
const url  = require('url');
const server = http.createServer((req, res) => {
    var books = JSON.stringify(require("./mane.json"));
    var i=0, BookId;
    switch(req.url.substring(0,10)) {
        case '/api/books':
            res.writeHead(200, { 'Content-Type': 'text/jacascript' });
            res.end(books);
            break;
        case '/api/book/' :
            BookId = parseInt(req.url.slice(-3));
            while (JSON.parse(books)[i]["id"]!=BookId) {
                i++;
            };
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.end(JSON.parse(books)[i]["id"]);
            break;
        default:
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Error 404');
    };
}).listen(8080, ()=> console.log('Server is working'));
