import { useState } from "react";
import WorkoutItem from "../WorkoutItem";

const WorkoutList = ({ workouts, deleteWorkout }) => {
  const [inputDate, setInputDate] = useState("");
  const onChangeHandler = (e) => {
    console.log(e);
  };

  return (
    <div className="container">
      <h1>My Workouts</h1>
      <form>
        <div className="inputs-row">
          <div className="date-input">
            Date (DD.MM.YY)
            <input
              type="text"
              placeholder="18.09.21"
              name="date"
              value={inputDate}
              onChange={onChangeHandler}
            />
          </div>
          <div className="distance-input">
            Completed, km
            <input
              type="text"
              placeholder="15.5"
              name="date"
              value={inputDate}
              onChange={onChangeHandler}
            />
          </div>
          <div className="add-workout">
            <button className="add-workout-button">Add</button>
          </div>
        </div>
      </form>
      <div className="workouts-table">
        <div className="workouts-table__titles">
          <div className="workouts-table__title">Date (DD.MM.YY)</div>
          <div className="workouts-table__title">Completed, km</div>
          <div className="workouts-table__title">Edit</div>
        </div>
        <div className="workouts-table__content">
          {workouts.map((workout) => (
            <WorkoutItem
              key={workout.id}
              id={workout.id}
              date={workout.date}
              distance={workout.distance}
              deleteWorkout={deleteWorkout}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutList;
