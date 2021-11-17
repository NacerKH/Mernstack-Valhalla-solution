const mongoose = require("mongoose");

mongoose
    .connect("mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.7wzez.mongodb.net/mern-project",
        {
            useNewUrlParser: true,
         useUnifiedTopology: true
         

        }
    )
    .then(() => console.log("Connected to MongoDb"))
    .catch((err) => console.log("Failed to connect to MongoDb", err));