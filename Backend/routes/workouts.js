const express = require("express");
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require("../controllers/workoutController")
const router = express.Router();

//get all routes
router.get("/", getWorkouts);

//get single route
router.get("/:id", getWorkout);

//POST a New workout
router.post("/",createWorkout)

//delete a Workout
router.delete("/:id", deleteWorkout)

//update a Workout
router.patch("/:id", updateWorkout)

module.exports = router;
