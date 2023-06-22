// YOUR CODE HERE


const express = require('express')

const cors = require('cors')
const db = require('./data/db.json')

const app = express()

app.use(cors())

//make new db based on db
//let productData = {...db.products}
//check pictures form wed

//let productData = {db}


app.get('/store', (req,res) => {
    res.status(200);
    res.send(db)
    //res.send("hello")
})

app.get("/:productId", async (req, res, next) => {
        const productId = req.params.productId
        const product = await app.fetchProductById(productId)
        res.status(200).json({product})
    
})

//app.post()
//check pics from wed

module.exports = app;