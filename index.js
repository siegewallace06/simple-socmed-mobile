const { application } = require("express"); //import express module
const express = require("express"); // create express instance
const app = express()
const port = 3000;
const random = "Just Some Random Text To Respond"


app.get('/', (req,res) => {
    // res.send("Request received! here is the respond text")
    res.send(`${random}`)
});

// localhost:3000/
app.listen(port,() => {
    console.log(`cli-nodejs-api nguping at http://localhost:${port}`)
});