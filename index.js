let http = require('http');

http
.createServer(function (req,res) {
    res.writeHead(200); 
    res.end("hello world\n"); 
})
.listen(8080, function (){
    console.log('listening to 8080')
})