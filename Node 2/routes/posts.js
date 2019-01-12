const express = require("express");
const router = express.Router();

router.get("/getAll", () => {
    console.log("get All chal raha hai")
})

router.post("/add", (req, res) => {
    console.log("add request chal rahi hai");
    console.log(req.body);
})

module.exports = router;