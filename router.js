const router = (req,res)=>{
    if (req.url === '/'){
        res.writeHead(200,{'Content-type':'text/html'});
        res.end("Hello");
    } else if (req.url === '/elephants'){
        res.writeHead(404);
        res.end('unknown uri');
    } else if (req.url === '/blog') {
    if(req.url === '/blog' && req.method==='POST') {
        if (req.headers.password==='potato'){
          let ourData = "";
          req.on("data", function(ourChunkOfData) {
            ourData += ourChunkOfData;
          });
          req.on("end", function() {
           if (ourData === JSON.stringify(['a', 'b'])) {
             res.writeHead(200);
             res.end(JSON.stringify(['a', 'b']));
           } else {
             res.writeHead(302);
             res.end(JSON.stringify({Location : "/blog"}));
           }
          })
        } else {
            res.writeHead(403);
            res.end('Forbidden');
        }
      }else {

      res.writeHead(200);
      res.end(JSON.stringify(["one", "two", "three"]));

    }
    }
}
module.exports = router;
