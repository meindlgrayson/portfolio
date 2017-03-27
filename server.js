'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const conString = 'postgres://localhost:5432';


app.use(express.static('./'));
app.get('/', function(request, response) {
  response.sendFile('/index.html', {root: '.'});
});

app.listen(PORT, function() {
  console.log(`server up on ${PORT}`);
});