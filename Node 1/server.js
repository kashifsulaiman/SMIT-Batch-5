const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log("Server connected to localhost!")
})

app.use(express.json());

app.use('/', require('./routes/index'));