const router = (req,res)=>{
    if (req.url === '/'){
        res.writeHead(200,{'Content-type':'text/html'});
        res.end("Hello");
    } else if (req.url === '/elephants'){
        res.writeHead(404);
        res.end('unknown uri');
    } else if (req.url === '/blog') {
    if(req.url === '/blog' && req.method==='POST') {
      res.writeHead(200) 
      res.end(JSON.stringify(['a', 'b']));
      }else {

      res.writeHead(200);
      res.end(JSON.stringify(["one", "two", "three"]));
      
    } 
    }
}
module.exports = router;
