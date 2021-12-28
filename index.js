//Import express and mysql modules
const express = require('express');
const app = express();
const mysql = require('mysql');

//define the port
const port = 3000;

//for string query and json stuff
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// establish connection to the database
const database = "tubes_mobile"
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: database
})

// check connection to the database
app.get('/connection', (req, res) => {
    db.connect(function (err) {
        if (err) {
            res.json({
                "status": 200,
                "message": "Failed to establish connection to the database!",
                "data": err
            })
        } else {
            res.json({
                "status": 200,
                "message": `Connection to ${database} has been established!`
            })
        }
    })
})


// REGISTER
//register new user account to the database
// user table contains :
// id, username, password, front_name, last_name,
// phone, email, address

app.post('/register', (req, res) => {
    let query = `INSERT INTO user SET username = '${req.body.username}', password = '${req.body.password}', front_name = '${req.body.front_name}', last_name = '${req.body.last_name}', phone = '${req.body.phone}', email = '${req.body.email}', address = '${req.body.address}'`;
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json({
            "status": 200,
            "response": results,
            "data": req.body
        })
    })
})

//Register JSON format
registJSON = {
    "username": "siegewallace06",
    "password": "kanesiegemud",
    "front_name": "Wallace",
    "last_name": "Siegemud",
    "phone": "081283153936",
    "email": "siegewallace06@nyc.com",
    "address": "23rd Street"
}

// LOGIN
// check username and password, if correct -> login
// user table contains :
// id, username, password, front_name, last_name,
// phone, email, address

app.post('/login', (req, res) => {
    let query = "SELECT * FROM user WHERE username = '" + req.body.username
                + "' AND password = '" + req.body.password
                + "'";
    db.query(query, (err,results) => {
        if (err) throw err;
        res.json({
            "status" : 200,
            "response" : results,
            "data" : req.body 
        })
    })
})

//Register JSON format
loginJSON = {
    "username": "siegewallace06",
    "password": "kanesiegemud",
}



// localhost:3000/
app.listen(port, () => {
    console.log(`cli-nodejs-api lagi nguping cok di http://localhost:${port}`)
});