import styles from "./WorkoutList/WorkoutList.module.css";
import dateFromStateConverter from "../utils/dateFromStateConverter";
import { useCallback, useMemo } from "react";

const WorkoutItem = ({ id, date, distance, deleteWorkout }) => {
  const onDeleteHandler = useCallback(() => deleteWorkout(id), [id]);
  const convertedDate = useMemo(() => dateFromStateConverter(date), [date]);

  return (
    <div className={styles["workouts-table__workout"]}>
      <div className={styles["workout"]}>{convertedDate}</div>
      <div className={styles["workout"]}>{distance}</div>
      <div className={styles["workout"]}>
        <button className={styles["workout-delete"]} onClick={onDeleteHandler}>
          X
        </button>
      </div>
    </div>
  );
};

export default WorkoutItem;
