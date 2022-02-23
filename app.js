const express = require('express');
const dotenv = require('dotenv').config();
const mobiles = require('./mobile.json')

const app = express(); //declares a new express app

// Enable CORS for all methods
app.use(function(req, res, next){
    console.log('reqOrigin1',req.header('origin'))
    if ( ['https://localhost:3000'].indexOf(req.header('origin')) !== -1 ){
      res.header("Access-Control-Allow-Origin", req.header('origin'))
      res.header("Access-Control-Allow-Credentials", "true")
      res.header("Access-Control-Expose-Headers", "Content-Disposition")
    } else {
      res.header("Access-Control-Allow-Origin", "*")
    }
    
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Organisation")
    next()
  });

app.get('/phones', async(req, res) => {
    res.json(mobiles)
});

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`))