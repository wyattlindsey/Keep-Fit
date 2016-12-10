var express = require('express');

app = express();

app.use(express.static(__dirname + '/client'));

//need to add this to handle direct addressing of routes.
//will serve index.html which has our jsx linked for routing.
app.get('*', function (request, response){
  response.sendFile(__dirname + '/client/index.html')
})

app.listen(8000);

console.log('lissttennning on 8k');
