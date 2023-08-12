const express = require('express');
const app = express();
const path = require('path');


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('view engine','ejs');


app.use('/',require('./router'));



app.listen(3000, ()=>{
    console.log('SERVER corriendo en http://localhost:3000');
});









/*const express = require('express');
const app = express();*/
/*const session = require('express-session');
const path = require('path');


app.use(express.json()); */
//app.use(express.urlencoded({extended:false})); 
//app.set('view engine','ejs');
//app.use(express.static(path.join(__dirname, 'ejs')));

//app.get('/', function(request, response) {
	// Render login template
//	response.sendFile(path.join(__dirname + 'login.ejs'));
//});

//app.use('/', require('./router'));

/*app.listen(3000, ()=>{
    console.log('SERVER corriendo en http://localhost:3000');
});*/


/*
const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');

const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'Sierra84$',
	database : 'academics'
});

const app = express();

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.set('view engine','ejs');
//app.use(express.static(path.join(__dirname, 'ejs')));

app.use(express.static(path.join(__dirname, 'static')));

// http://localhost:3000/
app.get('/', function(request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/login.html'));
});

// http://localhost:3000/auth
app.post('/auth', function(request, response) {
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query('SELECT * FROM cuentausuario WHERE usuario = ? AND clave = ?', [username, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = username;
				// Redirect to home page
				response.redirect('./home.ejs');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

// http://localhost:3000/home
app.get('/home', function(request, response) {
	// If the user is loggedin
	if (request.session.loggedin) {
		// Output username
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		// Not logged in
		response.send('Please login to view this page!');
	}
	response.end();
});

app.listen(3000);
*/