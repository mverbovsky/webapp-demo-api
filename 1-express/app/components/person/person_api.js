/**
 * REST API for person component
 * 
 * @author verbovsky
 */

module.exports = function (app, router, db) {
    var Person = db.mongoose.model('Person');

    var acceptsJson = function(req, res, next) {
        if (req.accepts('application/json')) {
            next();
        } else {
            res.status(406).json({ message: 'Not Acceptable' }).end();
        }
    };

    router.route('/persons')
        .get(function (req, res, next) {
            console.log('GET /persons');
            Person.find(function (err, persons) {
                if (err) {
                    return next(err);
                }
                res.json(persons);
            });
        })
        .post(acceptsJson, function (req, res, next) {
            console.log('POST /persons');
            var person = new Person(req.body);
            person.save(function (err, person) {
                if (err) {
                    return next(err);
                }

                res.json(person);
            });

        });

    router.route('/persons/:id')
        .get(function (req, res, next) {
            console.log('GET /persons/%s', req.params.id);
            Person.findById(req.params.id, function (err, person) {
                if (err) {
                    return next(err);
                }

                res.json(person);
            });
        })
        .put(acceptsJson, function (req, res, next) {
            console.log('PUT /persons/%s', req.params.id);
            Person.findById(req.params.id, function (err, person) {
                if (err) {
                    return next(err);
                }

                person.firstname = req.body.firstname;
                person.lastname = req.body.lastname;
                person.birthday = req.body.birthday;
                person.email = req.body.email;

                person.save(function (err, person) {
                    if (err) {
                        return next(err);
                    }

                    res.json(person);
                });
            });
        })
        .delete(function (req, res, next) {
            console.log('DELETE /persons/%s', req.params.id);
            Person.remove({
                _id: req.params.id
            }, function (err, person) {
                if (err) {
                    return next(err);
                }
                res.json({ message: 'Successfully deleted' });
            });
        });

    var module = {};
    return module;
};

