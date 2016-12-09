/**
 * DB model (mongoose)
 * 
 * @author verbovsky
 */
module.exports = function (db) {

    var personSchema = new db.mongoose.Schema({
        firstname: String,
        lastname: String,
        birthday: Date,
        email: String
    }, { collection: 'persons' });

    db.mongoose.model('Person', personSchema);

    var module = {};
    return module;
};


