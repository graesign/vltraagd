const express = require('express');
const path = require('path');
const cors = require('cors');

const indexRoutes = require('./routes/index');
const tasksRoutes = require('./routes/tasks');
const usersRoutes = require('./routes/users');
// const engineRoutes = require('./routes/engine.controller');


const app = express();

// settings
// app.set('views', path.join(__dirname, 'views'));
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'ejs');

app.set('port', process.env.PORT || 3000);

// middleWares
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*'); //<-- you can change this with a specific url like http://localhost:4200
    // res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');

    next();
});
// Add headers
// app.use(function (req, res, next) {
//
//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//
//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//
//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//
//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);
//
//     // Pass to next layer of middleware
//     next();
// });

app.use('https://app.teamleader.eu/api', usersRoutes);


app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
// app.use('/', indexRoutes);
app.use('/api', tasksRoutes)
// app.use('/api/somethings/send-something', engineRoutes);

// app.use('https://app.teamleader.eu/api/', usersRoutes);
// app.use('/api/', usersRoutes);


// static files
app.use(express.static(path.join(__dirname, 'dist')));

// start the server
app.listen(app.get('port'), () => {
    console.log('server on port 3000');
});