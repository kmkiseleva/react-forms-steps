import WorkoutList from "./components/WorkoutList/WorkoutList";
import "./App.css";
import sourceData from "./assets/sourceData";
import { useState } from "react";

function App() {
  const [workouts, setWorkout] = useState(sourceData);
  const [data] = useState({ date: "", distance: "" });

  const addNewWorkoutHandler = (workoutData) => {
    const sameDayWorkout = workouts.find(
      (workout) => workout.date === workoutData.date
    );

    if (sameDayWorkout) {
      const updWorkoutObj = {
        ...sameDayWorkout,
        distance: +sameDayWorkout.distance + +workoutData.distance,
      };
      setWorkout((prevState) => {
        const filteredWorkouts = prevState.filter(
          (workout) => workout.date !== sameDayWorkout.date
        );
        return [...filteredWorkouts, updWorkoutObj];
      });
    } else {
      setWorkout((prevState) => [...prevState, workoutData]);
    }
  };

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
      <WorkoutList
        workouts={workouts}
        deleteWorkout={deleteWorkoutHandler}
        addNewWorkoutHandler={addNewWorkoutHandler}
        data={data}
      />
    </div>
  );
}

export default App;
