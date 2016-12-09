/**
 * Person component:
 * - REST API
 * - DB model
 * 
 * @author verbovsky
 */

module.exports = function (app, router, db) {
    require('./person_model.js')(db);
    require('./person_api.js')(app, router, db);

    var module = {};
    return module;
};
