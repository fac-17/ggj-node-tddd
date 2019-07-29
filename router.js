const router = (req,res)=>{
    if (req.url==='/'){
        res.writeHead(200,{'Content-type':'text/html'});
        res.end("Hello");
    }
}
module.exports = router;