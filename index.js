const express = require("express");

const mongoose = require("mongoose")

const routes = require("./routes") 

// check if database is on
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Connected to Database"))

mongoose
.connect("mongodb://localhost:27017/acmedb", {useNewUrlParser:true})
.then( () => {
    

    const app = express(); 
    app.use(express.json()) 
    app.use("/api", routes)

    app.listen(5000, () => {
        console.log("Server has started!");
    });
})
