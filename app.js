const express = require ('express')
const path    = require ('path');
const bodyParser = require ('body-parser');
const cors    = require ('cors');
const passport = require ('passport');
const mongoose = require ('mongoose');


const app = express() ;

const users = require('./routes/users');

const port = 3000 ; 

app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser MW
app.use( bodyParser.json());



app.use('/users', users); 

// set rout for home page ( landing page ) 
app.get('/', ( req, res ) => {
    res.send( 'Invalid End point');
});


// startere server
app.listen( port, () => {
    console.log ( 'Server started om port' +port );
});