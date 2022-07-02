const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");


//get all workouts
const getWorkouts = async (req, res) => {
  const workout = await Workout.find({}).sort({ createdAt: -1 });

  res.status(200).json(workout)
}

//get single workout
const getWorkout= async (req,res) => {
  const {id} = req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({
      message: "No such Workout exists"
    })
  }
  const workout = await Workout.findById(id)
  if(!workout){
    res.status(404).json({message: "Workout not found"})
  }
  res.status(200).json(workout)
}


//create new workout
createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  // add doc to db
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
//delete existing workout
const deleteWorkout = async (req, res) =>{
  const {id} = req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({
      message: "No such Workout exists"
    })
  }
  const workout = await Workout.findOneAndDelete({_id: id})
  if(!workout){
    res.status(400).json({message: "Workout not found"})
  }
  res.status(200).json(workout)
}


//update a workout
const updateWorkout = async (req, res) => {
  const {id} = req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({
      message: "No such Workout exists"
    })
  }
  const workout = await Workout.findOneAndUpdate({_id: id},{
    ...req.body
  })
  if(!workout){
    res.status(400).json({message: "Workout not found"})
  }
  res.status(200).json(workout)
}



module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
};
