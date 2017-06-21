const express  = require ('express');
const router   = express.Router();


// Register 
router.get('/register', ( req, res, next ) => {
    res.send('RESGISTER');
});


// Authenticate 
router.get( '/authenticate', ( req, res, next ) => {
    res.send ( ' AUTHENTICATE');
});

// PROFILE
router.get( '/profile', (req, res, next) => {
    res.send (' PROFILE');
});

// VVALIDATE
router.get('/validate', (req, res, next) =>  {
       res.send( 'VALIDATE');
});


module.exports = router ;
 