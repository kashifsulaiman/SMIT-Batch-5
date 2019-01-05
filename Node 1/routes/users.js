const express = require("express");
const router = express.Router();

router.get("/getAll", () => {
    console.log("get All chal raha hai")
})

router.get("/get/:id", (req, res) => {
    console.log("/get/:id chal raha hai", req.params.id)
})

router.post("/add", (req, res) => {
    console.log("add request chal rahi hai");
    console.log(req.body);
})

module.exports = router;