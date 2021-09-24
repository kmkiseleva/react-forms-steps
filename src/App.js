import WorkoutList from "./components/WorkoutList/WorkoutList";
import "./App.css";
import sourceData from "./assets/sourceData";
import { useState } from "react";

function App() {
  const [workouts, setWorkout] = useState(sourceData);

  const deleteWorkoutHandler = (id) => {
    if (id) {
      setWorkout((prevState) => {
        const filteredWorkouts = prevState.filter(
          (workout) => workout.id !== id
        );
        return [...filteredWorkouts];
      });
    }
  };
  return (
    <div>
      <WorkoutList workouts={workouts} deleteWorkout={deleteWorkoutHandler} />
    </div>
  );
}

export default App;
