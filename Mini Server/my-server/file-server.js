const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

    // Serve HTML page with buttons
    if(req.url === '/') {
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(`
            <h1>Image Gallery</h1>
            <button onclick="location.href='/image1'">Image 1</button>
            <button onclick="location.href='/image2'">Image 2</button>
        `);
    }
    
    // Serve first image
    else if(req.url === '/image1') {
        const filePath = path.join(__dirname, 'images', 'image1.jpg');
        fs.readFile(filePath, (err, data) => {
            if(err) { res.writeHead(404); res.end("File not found"); }
            else {
                res.writeHead(200, {'Content-Type':'image/jpeg'});
                res.end(data);
            }
        });
    }

    // Serve second image
    else if(req.url === '/image2') {
        const filePath = path.join(__dirname, 'images', 'image2.jpg');
        fs.readFile(filePath, (err, data) => {
            if(err) { res.writeHead(404); res.end("File not found"); }
            else {
                res.writeHead(200, {'Content-Type':'image/jpeg'});
                res.end(data);
            }
        });
    }

    else {
        res.writeHead(404);
        res.end("Page not found");
    }
});

server.listen(3001, '0.0.0.0', () => {
    console.log("Server running on port 3001");
});
