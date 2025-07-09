const Task = require('../models/task.model');

exports.getAll = () => Task.find();
exports.getById = (id) => Task.findById(id);
exports.create = (data) => Task.create(data);
exports.update = (id, data) => Task.findByIdAndUpdate(id, data, { new: true });
exports.delete = (id) => Task.findByIdAndDelete(id);
