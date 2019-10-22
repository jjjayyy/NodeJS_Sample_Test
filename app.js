var express = require('express');
var app = express();
//정적인 파일(public 폴더) 사용)
app.use(express.static('public'));

//라우터가 라우팅했다..
app.get('/', function(req, res){
      res.send('Hello Home');
});
app.get('/dynamic', function(req,res) {
   var lis = '';
   for(var i=0; i<5; i++) {
      lis = lis + '<li>coding</li>'
   }
   var time = Date();
   var output = `
   <!DOCTYPE html>
   <html>
       <head>
           <meta charset="utf-8">
           <title></title>
       </head>
       <body>
           Hello Dynamic!!
           ${lis}
           ${time}
       </body>
   </html>`
   res.send(output);
});
app.get('/route', function(req, res){
   res.send('Hello Router, <img src="/ssk.jpg">');
})
app.get('/login',function(req, res){
   res.send('Login plz');
})
app.listen(3000,function(){
   console.log('Connected 3000 port!');
});
