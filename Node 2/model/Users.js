const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const Users = mongoose.model('Users', UsersSchema);

module.exports = Users;