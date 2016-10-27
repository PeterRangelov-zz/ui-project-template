var express = require('express');
var app = express();

app.use(express.static('dist'));

app.listen(process.env.PORT || 3000, function () {
  console.log('UI Template Project listening on port 3000!');
});