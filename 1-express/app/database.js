/**
 * Database configuration and connection.
 * 
 * @author verbovsky
 */

var config = require('./config.js');
var mongoose = require('mongoose');

const MONGODB_URL = config.MONGODB_URL; 

module.exports = {
    mongoose: mongoose,
    connect: function(once) {
        mongoose.connect(MONGODB_URL);
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'Connection error:'));
        db.once('open', function() {
            console.log('DB connected to %s', MONGODB_URL);
            once && once();
        });
    },

    close: function() {
        console.log("DB connection closing...");
        mongoose.connection.close();
    }
}




