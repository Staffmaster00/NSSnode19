const http = require('http');
const server = http.createServer();
const { readFile } = require('fs');
server.on('request', (req, res) => {
    console.log('Request received for:', req.url)
    readFile('./index.html', (err, buffer)=>{
        if (err){
            res.statusCode=404;
            res.end();
        }
        res.end(buffer);
    });
})
server.listen(8080);