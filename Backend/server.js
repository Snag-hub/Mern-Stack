require("dotenv").config();

const workoutRoute = require("./routes/workouts");

const express = require("express");
const mongoose = require("mongoose");
// express app
const app = express();

//middle ware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workouts", workoutRoute);

//connect to mongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(function (connection) {
    //listen to port
    app.listen(process.env.PORT, () => {
      console.log("connected to db \nserver is listening on port " + process.env.PORT);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
