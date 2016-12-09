/**
 * Demo Application
 * 
 * @author verbovsky
 */

var config = require('./config.js')
var db = require('./database.js');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routerApi = express.Router();

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log(req.body);
    next(); 
});
app.use('/api', routerApi);
app.use('/docs', express.static('docs'));

db.connect();

var server = app.listen(config.PORT);
console.log('Listening on port %s', config.PORT);

// Person component
require('./components/person/person.js')(app, routerApi, db)

// cleanup
var cleanup = function() {
    console.log("Server closing...");
    db.close();
    server.close();
}

process.on('exit', () => {
    console.log('exit...');
    cleanup();
});

process.on('SIGINT', () => {
    console.log('SIGINT...');
    process.exit(0);
});
