const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.get('/getAll', (req, res) => {
    res.send("getAll")
})

router.post('/addPost', (req, res) => {
    const bearerToken = req.headers.authorization;
    const token = bearerToken.split(' ')[1];

    jwt.verify(token, 'anySecretKey', (err, res) => {
        if(err) {
            res.send(403, {message: "Forbidden! Please login."});
            return
        }
        
        console.log('res', res);
    });
})

module.exports = router;