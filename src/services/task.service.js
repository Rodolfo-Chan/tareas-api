// services/task.service.js

const Task = require('../models/task.model');

exports.getAll = (userId) => Task.find({ usuario: userId });
exports.getById = (id, userId) => Task.findOne({ _id: id, usuario: userId });
exports.create = (data) => Task.create(data);
exports.update = (id, data, userId) => Task.findOneAndUpdate({ _id: id, usuario: userId }, data, { new: true });
exports.delete = (id, userId) => Task.findOneAndDelete({ _id: id, usuario: userId });
