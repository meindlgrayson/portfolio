'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('./'));
app.get('/', function(request, response) {
  response.sendFile('/index.html', {root: '.'});
});

app.listen(PORT, function() {
  console.log(`server up on ${PORT}`);
});