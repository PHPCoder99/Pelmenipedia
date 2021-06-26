const express = require('express');
const path = require('path');
const data = require('./recipes.json');
const app = express();

app.listen(3000, () => console.log(__dirname));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res){
  res.sendFile(__dirname + '/index.html');
})

app.get('/recipe/:r', function (req, res){
  
})
