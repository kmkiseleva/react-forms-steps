import styles from "./WorkoutList/WorkoutList.module.css";
import { useEffect, useState } from "react";
import shortid from "shortid";
import dateInputConverter from "../utils/dateInputConverter";

const AddNewWorkout = ({ addNewWorkoutHandler, data }) => {
  const [inputDate, setInputDate] = useState("");
  const [inputDistance, setInputDistance] = useState("");
  const [id, setId] = useState(null);

  useEffect(() => {
    setInputDate(data.date);
    setInputDistance(data.distance);
    setId(data.id);
  }, [data.date, data.distance, data.id]);

  const resetForm = () => {
    setInputDate("");
    setInputDistance("");
    setId("");
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const normalDate = dateInputConverter(inputDate);
    const payload = {
      id: id || shortid.generate(),
      date: normalDate,
      distance: Number(inputDistance),
    };

    if (
      !payload.date ||
      inputDate.length < 8 ||
      inputDate.length > 10 ||
      !payload.distance
    ) {
      return;
    }

    addNewWorkoutHandler(payload);
    resetForm();
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    name === "date" ? setInputDate(value) : setInputDistance(value);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={styles["inputs-row"]}>
        <div className={styles["date-input"]}>
          Date (DD.MM.YY)
          <input
            type="text"
            placeholder="18.09.21"
            name="date"
            value={inputDate}
            onChange={onChangeHandler}
          />
        </div>
        <div className={styles["distance-input"]}>
          Completed, km
          <input
            type="text"
            placeholder="15.5"
            name="distance"
            value={inputDistance}
            onChange={onChangeHandler}
          />
        </div>
        <div className={styles["add-workout"]}>
          <button className={styles["add-workout-button"]}>Add</button>
        </div>
      </div>
    </form>
  );
};

export default AddNewWorkout;
