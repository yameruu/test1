const express = require("express");
const multer = require("multer");
const app = express();

const upload = multer({dest: "uploads/"});



app.post("/upload", upload.array, (req, res) => {
    res.json({status:"success"});
});


app.listen(4000, () =>console.log("listening on port 4000"));

