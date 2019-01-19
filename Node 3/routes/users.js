const express = require('express');
const router = express.Router();
const Users = require('../model/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get('/getAll', async (req, res) => {
    try {
        const users = await Users.find({})
        res.send(users);
    } catch(e) {
        res.send(500, {message: e.message});
    }
})

router.post('/addUser', async (req, res) => {
    try {
        const user = new Users(req.body);

        await user.save();
        res.send({message: "User successfully inserted!"})
    } catch(e) { 
        res.send(500, {message: e.message})
    }
})

router.post('/register', (req, res) => {
    const user = req.body;
    const hash = hashPassword(user.password);

    const newUser = new Users({email: user.email, password: hash});

    newUser.save()
    .then(() => res.send({message: "User registered successfully!"}))
    .catch(e => res.send(500, {message: e.message}));
})

router.post('/login', async (req, res) => {
    //Check Email
    const user = await Users.find({email: req.body.email});

    if(!user.length) {
        res.send(500, {message: "User not found!"});
        return;
    }

    //Compare Email
    const passwordMatched = bcrypt.compareSync(req.body.password, user[0].password);

    if(!passwordMatched) {
        res.send(500, {message: "Incorrect Email/Password!"});
        return;
    }

    //Generate Token
    const token = jwt.sign({user: user[0]}, 'anySecretKey');
    res.send({token});
})



function hashPassword(password) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);

    return hash;
}

module.exports = router;