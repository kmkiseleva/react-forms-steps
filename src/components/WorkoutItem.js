import dateFromStateConverter from "../utils/dateFromStateConverter";
import { useRef } from "react";

const WorkoutItem = ({ id, date, distance, deleteWorkout }) => {
  const ref = useRef();

  const onDeleteHandler = () => {
    const { id } = ref.current.dataset;
    deleteWorkout(id);
  };

  return (
    <div className="workouts-table__workout" ref={ref} data-id={id}>
      <div className="workout">{dateFromStateConverter(date)}</div>
      <div className="workout">{distance}</div>
      <div className="workout">
        <button className="workout-delete" onClick={onDeleteHandler}>
          X
        </button>
      </div>
    </div>
  );
};

export default WorkoutItem;
