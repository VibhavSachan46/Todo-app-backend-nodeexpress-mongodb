const express = require("express");
const app = express();

// load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body

app.use(express.json());

// import routes for todo api
const todoRoutes = require("./routes/Todos");

// mount the todo api routes
app.use("/api/v1", todoRoutes);


// start server
app.listen(PORT, () => {``
    console.log(`Server at ${PORT}`)
})

//connect to database
const dbConnect = require("./config/database");
dbConnect();

//default Route 
app.get("/", (req,res) => {
    res.send('<h1> This is homepage 2 baby</h1>')
})