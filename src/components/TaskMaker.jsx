import { DatePicker } from "keep-react";
import { useState } from "react";
import styles from "../styles/TaskMaker.module.css";

export default function TaskMaker({ setTasks, setFrom, setTo }) {
  const [task, setTask] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const handelSubmit = (e) => {
    e.preventDefault();
    if (task && startTime && endTime) {
      setTasks(task);
      setFrom(startTime);
      setTo(endTime);
    }
    setTask("");
  };
  return (
    <div className={styles.task_maker}>
      <form onSubmit={handelSubmit}>
        <div className={styles.task_name_add}>
          <input
            type="text"
            className={styles.task_input}
            placeholder="What is the task?"
            onChange={(e) => setTask(e.target.value)}
            required
            value={task}
          />
          <button type="submit" className={styles.add_task_btn}>
            Add
          </button>
        </div>

        <div className={styles.time_picker_area}>
          <DatePicker time={setStartTime}>
            <span className={styles.time_picker_text}>Select start time</span>
            <DatePicker.Time />
          </DatePicker>
        </div>
        <div className={styles.time_picker_area}>
          <DatePicker time={setEndTime}>
            <span className={styles.time_picker_text}>Select end time</span>
            <DatePicker.Time />
          </DatePicker>
        </div>
      </form>
    </div>
  );
}
