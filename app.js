var express = require('express');
var app = express();
//라우터가 라우팅했다..
app.get('/', function(req, res){
      res.send('Hello Home');
});
app.get('/login',function(req, res){
   res.send('Login plz');
})
app.listen(3000,function(){
   console.log('Connected 3000 port!');
});
