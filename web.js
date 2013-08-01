
var express = require('express');
var app = express();
var fs = require('fs')

app.use(express.logger());

app.get('/', function(request, response) {
  fs.readFile('index.html', function(err, cont)
  {
	if(err) throw err;
        response.send(cont.toString());
   });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});