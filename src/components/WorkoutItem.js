import styles from "./WorkoutList/WorkoutList.module.css";
import dateFromStateConverter from "../utils/dateFromStateConverter";
import { useRef } from "react";

const WorkoutItem = ({ id, date, distance, deleteWorkout }) => {
  const ref = useRef();

  const onDeleteHandler = () => {
    const { id } = ref.current.dataset;
    deleteWorkout(id);
  };

  return (
    <div className={styles["workouts-table__workout"]} ref={ref} data-id={id}>
      <div className={styles["workout"]}>{dateFromStateConverter(date)}</div>
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
