const http = require('http');
const url  = require('url');
const server = http.createServer((req, res) => {
    var books = JSON.stringify(require("./mane.json"));
    var i=0, BookId;
    switch(req.url.substring(0,10)) {
        case '/api/books':
            res.writeHead(200, { 'Content-Type': 'text/javascript; charset=utf-8' });
            for (var k=0; k<JSON.parse(books).length; k++) {
                res.write(JSON.parse(books)[k]["id"] +' | '+ JSON.parse(books)[k]["name"] +' | '+ JSON.parse(books)[k]["author"] +' | '+ JSON.parse(books)[k]["description"] +'\n');
            };
            res.end();
            break;
        case '/api/book/' :
            BookId = parseInt(req.url.slice(-3));
            while (JSON.parse(books)[i]["id"]!=BookId) {
                i++;
            };
            res.writeHead(200, { 'Content-Type': 'text/javascript; charset=utf-8' });
            res.end(JSON.parse(books)[i]["id"] +' | '+ JSON.parse(books)[i]["name"] +' | '+ JSON.parse(books)[i]["author"] +' | '+ JSON.parse(books)[i]["description"]);
            break;
        default:
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Error 404');
    };
}).listen(8080, ()=> console.log('Server is working'));
