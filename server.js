//-----------------
//  Dependencies
//-----------------
var express    = require('express'),
  app        = express(),
  bodyParser = require('body-parser'),
  routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

var router = express.Router();
routes.routes(router);

app.use('/api', router);

app.listen(port);
console.log('Listenning on port: ' + port);