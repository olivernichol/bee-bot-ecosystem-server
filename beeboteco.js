var fs = require('fs');
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
var request = require('request');
const { debug } = require('console');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()) 

app.post('/bbeadd', function (req, res) {
  if (req.body.platform == 'windows') {
    console.log('Running for windows!')
    var windowsstate = fs.readFileSync('./windows.txt')
    if (windowsstate = 'true') {
      var instring = req.body.username + ' ' + req.body.platform;
      console.log('Sending: ' + instring)
      var options = {
        uri: 'WEBHOOKLINKREMOVED',
        method: 'POST',
        json: {
          "content": instring
        }
      };
      
      request(options, function (error, response, body) {
        if (error) {
          console.log('Error.')
        }
      });

    }
  }
  else if (req.body.platform == 'android') {
    console.log('Running for android!')
    var windowsstate = fs.readFileSync('./android.txt')
    if (windowsstate = 'true') {
      var instring = req.body.username + ' ' + req.body.platform;
      console.log('Sending: ' + instring)
      var options = {
        uri: 'WEBHOOKLINKREMOVED',
        method: 'POST',
        json: {
          "content": instring
        }
      };
      
      request(options, function (error, response, body) {
        if (error) {
          console.log('Error.')
        }
      });
    }
  }
  res.sendStatus(200)
})
app.post('/bbekill', function (req, res) {
  if (req.body.platform == 'windows') {
    console.log('Running for windows!')
    var windowsstate = fs.readFileSync('./windows.txt')
    if (windowsstate = 'true') {
      var instring = req.body.username + ' ' + req.body.platform;
      var options = {
        uri: 'WEBHOOKLINKREMOVED',
        method: 'POST',
        json: {
          "content": instring
        }
      };
      
      request(options, function (error, response, body) {
        if (error) {
          console.log('Error.')
        }
      });

    }
  }
  else if (req.body.platform == 'android') {
    console.log('Running for android!')
    var windowsstate = fs.readFileSync('./android.txt')
    if (windowsstate = 'true') {
      var instring = req.body.username + ' ' + req.body.platform;
      var options = {
        uri: 'WEBHOOKLINKREMOVED',
        method: 'POST',
        json: {
          "content": instring
        }
      };
      
      request(options, function (error, response, body) {
        if (error) {
          console.log('Error.')
        }
      });
    }
  }
  res.sendStatus(200)
})
app.get('/', function (req, res) { res.send('Hello World') })
app.listen(16969)
