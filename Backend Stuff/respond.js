//Import express and mysql modules
const express = require('express');
const app = express();
const mysql = require('mysql');
const { and } = require('react-native-reanimated');

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
    let query = `INSERT INTO user SET username = '${req.body.username}', password = '${req.body.password}', front_name = '${req.body.front_name}', last_name = '${req.body.last_name}'`;
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
    "last_name": "Siegemud"
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
    db.query(query, (err, results) => {
        if (err) throw err;
        temp = res.json.results[0]
        if (temp.username == req.body.username && temp.password == req.body.password) {
            res.json({
                "status": "aman cok",
                "response": results,
                "data": req.body
            })
        }else{
            res.json({
                "status" : "Gaada akun cok"
            })
        }

    })
})

//Register JSON format
loginJSON = {
    "username": "siegewallace06",
    "password": "kanesiegemud"
}

//CREATE POST
//For responding user to create new post
//post table contains :
//id, user_id, post_detail, like_count
app.post('/post/:id', (req, res) => {
    let query = "INSERT INTO post SET post_detail = '" + req.body.post_detail
        + "', user_id = '" + req.body.user_id + "'"
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json({
            "status": 200,
            "message": "Data Successfully Inserted!",
            "data": results
        })
    })
})

//RETRIEVE ALL POST
// SELECT post.post_detail, user.username FROM post JOIN user ON post.user_id = user.id
app.get('/post', (req, res) => {
    let query = "SELECT post.post_detail, user.username FROM post JOIN user ON post.user_id = user.id"
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json({
            "status": 200,
            "message": "Data succesfully retrieved!",
            "data": results
        })
    })
})

//RETRIEVE CERTAIN USER'S POST
//get user's post from id inserted from "id" parameter
app.get('/post/:id', (req, res) => {
    let query = "SELECT * FROM post WHERE user_id = '" + parseInt(req.params.id)
        + "'"
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json({
            "status": 200,
            "message": "Data succesfully retrieved!",
            "data": results
        })
    })
})

// post JSON format 
postJSON = {
    "post_detail": "Panas panas gini jadi pengen es goyobot :(",
    "user_id": 4
}


// localhost:3000/
app.listen(port, () => {
    console.log(`cli-nodejs-api lagi nguping cok di http://localhost:${port}`)
});

