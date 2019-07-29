const router = (req,res)=>{
    if (req.url==='/'){
        res.writeHead(200,{'Content-type':'text/html'});
        res.end("Hello");
    }
    if (req.url==='/elephants'){
        res.writeHead(404);
        res.end('unknown uri');
    }
}
module.exports = router;