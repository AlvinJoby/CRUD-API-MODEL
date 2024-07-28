const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = new express();
const PORT = 3000;



app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/api/products', productRoute);


//homepage
app.get('/', (req,res)=>{
    res.send("HELLO WORLD!");
    res.end();
})





//Databases and PORT connections
mongoose.connect("mongodb+srv://alvincsdevnodepractise:8zuQglkUefwsOsxj@practise-nodejs.ufzae8e.mongodb.net/Node-API?retryWrites=true&w=majority&appName=PRACTISE-nodejs")
.then(()=>{
    console.log("Connected to the database!");
    app.listen(PORT, ()=>{
        console.log(`The app is listenting at PORT ${PORT}`)
    })
})
.catch(()=>{
    console.log("Connection failed");
})