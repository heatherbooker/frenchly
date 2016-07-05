var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'build')));

app.listen(process.env.PORT, '0.0.0.0', function() {
  console.log('started listening on ', app.url);
});
