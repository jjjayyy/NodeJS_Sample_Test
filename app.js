var express = require('express');
var app = express();
app.locals.pretty = true;

//템플릿 엔진
app.set('view engine', 'jade');
app.set('views','./views');

//정적인 파일(public 폴더) 사용)
app.use(express.static('public'));
//쿼리스트링
app.get('/topic/:id',function(req,res){
   //res.send(req.query.id + ','+req.query.name);
   var topics = [
      'Javascript is...',
      'Nodejs is...',
      'Express is...'
   ];
   var output = `
      <a href="/topic?id=0">JavaScript</a><br>
      <a href="/topic?id=1">Nodejs</a><br>
      <a href="/topic?id=2">Express</a><br>
      ${topics[req.params.id]}
      `

      res.send(output);
})
app.get('/topic/:id/:mode', function(req, res){
   res.send(req.params.id+','+req.params.mode)
})
app.get('/template', function(req,res){
   res.render('temp', {time:Date(), _title:'Jade'});
})

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
