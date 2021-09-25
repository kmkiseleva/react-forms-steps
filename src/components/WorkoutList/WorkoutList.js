import styles from "./WorkoutList.module.css";
import WorkoutItem from "../WorkoutItem";
import AddNewWorkout from "../AddNewWorkout";

const WorkoutList = ({
  workouts,
  deleteWorkout,
  addNewWorkoutHandler,
  data,
}) => {
  const sortWorkouts = workouts.sort((prev, next) =>
    prev.date > next.date ? -1 : 1
  );

  return (
    <div className={styles.container}>
      <h1>My Workouts</h1>
      <AddNewWorkout addNewWorkoutHandler={addNewWorkoutHandler} data={data} />
      <div className={styles["workouts-table"]}>
        <div className={styles["workouts-table__titles"]}>
          <div className={styles["workouts-table__title"]}>Date (DD.MM.YY)</div>
          <div className={styles["workouts-table__title"]}>Completed, km</div>
          <div className={styles["workouts-table__title"]}>Edit</div>
        </div>
        <div className={styles["workouts-table__content"]}>
          {sortWorkouts.map((workout) => (
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
