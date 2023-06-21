// YOUR CODE HERE


const express = require('express')

const cors = require('cors')
const db = require('./data/db.json')

const app = express()

app.use(cors())

//make new db based on db
//let productData = {...db.products}

//let productData = {db}


app.get('/', (req,res) => {
    res.status(200);
    res.send(db)
    //res.send("hello")
})

//app.post()
//check pics from wed

module.exports = app;