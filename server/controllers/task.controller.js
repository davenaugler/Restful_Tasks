const Task = require('../models/task.model');

module.exports.getAllDaTasks = function(req, res) {
    Task.find()
        .then(allDaTasks => res.json(allDaTasks))
        .catch(err => res.json(err));
};

module.exports.getOneSingleTask = function(req, res) {
    console.log(req);
    console.log(req.params);
    Task.findOne({_id: req.params.id})
        .then(oneSingleTask => res.json(oneSingleTask))
        .catch(err => res.json(err));
};

module.exports.updateOneSingleTask = function(req, res) {
    console.log(req.body);
    Task.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatedTask => res.json(updatedTask))
        .catch(err => res.json(err));
};

module.exports.createNewTask = function(req, res) {
    console.log(req.body);
    Task.create(req.body)
        .then(newlyCreatedTask => res.json(newlyCreatedTask))
        .catch(err => res.json(err));
};

module.exports.deleteOneSingleTask = function(req, res) {
    Task.remove({_id: req.params.id})
        .then(confirmationOfRemoval => res.json(confirmationOfRemoval)) // { n: 1, nModified: 1, ok: 1 }
        .catch(err => res.json(err));
};
