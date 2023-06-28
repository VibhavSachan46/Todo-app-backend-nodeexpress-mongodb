// this files purpose is to ensure or establish connection between database and application

const mongoose = require("mongoose");

require("dotenv").config() // data of .env will be availabel to process object

// function to establish connection between application and database
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL ,{
        useNewUrlParser:true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Db connection is successful"))
    .catch((error) => {
        console.log("ISsue in connection");
        console.log(error.message);
        process.exit(1);
    });
}

module.exports = dbConnect;