var express = require('express');
var app = express();
var router = express.Router();

var path = __dirname + '/views/';

router.use(function(req,res,next) {
  next();
});

app.use('/',router);

router.get('/',function(req, res){
  res.sendFile(path + 'index.html');
});

app.use(express.static(__dirname + '/public'));

router.get('/swipe',function(req, res){
  res.sendFile(path + 'swipe.html');});

app.use('*',function(req, res){
  res.send('Error 404: Not Found!');
});



app.listen(3000,function(){
  console.log('Server running at Port 3000');
});
