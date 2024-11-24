var express = require ("express");
var app = express();

app.listen(8383);

app.use(express.json());

app.get("/home", (req, res) =>{
    res.sendFile("index.html", {root: __dirname});
})

app.post("/contact", (req, res) => {
    console.log(req.body);
})