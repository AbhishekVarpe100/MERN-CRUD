const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors());
app.use(express.json())
const dotenv = require('dotenv').config();
// dotenv.config();
const User = require("./models/userModel");

const userRoute = require("./routes/userRoutes")

const mongoose = require('mongoose');
mongoose.connect(process.env.URI).then(() => {
    console.log("Connected...");
    app.listen(process.env.PORT || 8000, (err) => {
        if (err) console.log(err);
        else {
            console.log("Successfully running at", process.env.PORT)
        }
    });
}).catch((error) => {
    console.log(error)
})
app.use(userRoute)



