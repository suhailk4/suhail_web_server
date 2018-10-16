var express = require('express');
var app = express();
var today = new Date();


var requestTime = function (req, res, next) {
 // = new Date.now().toString();

  req.requestTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

 console.log(req.requestTime);
  next();
}

app.use(requestTime);




app.get('/', function (req, res) {
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText)
});

app.listen(3000,()=>{
 console.log('Server is running on port 3000');

});
