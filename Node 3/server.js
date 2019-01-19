const express = require('express');
const app = express();
const mongoose = require('./config/db');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("db connected!")
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Hamara server shareef is working!")
})

app.use(express.json());

app.use('/', require('./routes/index'))
