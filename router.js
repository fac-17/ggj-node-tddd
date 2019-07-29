const router = (req,res)=>{
    if (req.url === '/'){
        res.writeHead(200,{'Content-type':'text/html'});
        res.end("Hello");
    }
    if (req.url === '/elephants'){
        res.writeHead(404);
        res.end('unknown uri');
    }
    if (req.url === '/blog') {
      res.writeHead(200);
      res.end(JSON.stringify(["one", "two", "three"]));
    }
}
module.exports = router;
