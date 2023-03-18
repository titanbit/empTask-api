require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 3322;

const app = express();

//use middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// Configuring the database
// const dbConfig = require("./config/database.config.js");
// mongoose.Promise = global.Promise;

// mongoose
//     .connect(dbConfig.url, {
//         useNewUrlParser: true,
//     })
//     .then(() => {
//         console.log("## Successfully connected to the Mongo database");
//     })
//     .catch((err) => {
//         console.log(
//             "!! Could not connect to the Mongo database. Exiting now...",
//             err
//         );
//         process.exit();
//     });


// require modules

// require("./app/routes/emp.routes")(app)


app.get("/", (req, res) => {
    res.send({ status: true, message: "backend api" })
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})
