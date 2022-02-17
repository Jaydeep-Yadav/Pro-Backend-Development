const express = require("express");
const format = require('date-format');
const app = express();

const PORT = 4000 || process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/api/v1/insta",(req,res)=>{
    const instaSocial = {
        userName : "bad_boy_official2",
        followers : 942,
        follows: 684,
        date: format.asString("dd/MM/yy - hh:mm:ss", new Date())
    };

    res.status(200).json( instaSocial );
});

app.get("/api/v1/linkedin",(req,res)=>{
    const instaSocial = {
        userName : "Jaydeep Yadav",
        followers : 4324,
        follows: 100,
        date: format.asString("dd/MM/yy - hh:mm:ss", new Date())
    };

    res.status(200).json( instaSocial );
});

app.get("/api/v1/:token",(req,res)=>{
  console.log(req.params.token);
  res.status(200).json({
    param : req.params.token
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
