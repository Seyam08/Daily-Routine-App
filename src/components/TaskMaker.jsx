import { useEffect, useState } from "react";
import styles from "../styles/TaskMaker.module.css";

export default function TaskMaker({ setTasks }) {
  const [task, setTask] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [duration, setDuration] = useState();
  const allHours = [
    "12:00 AM",
    "1:00 AM",
    "2:00 AM",
    "3:00 AM",
    "4:00 AM",
    "5:00 AM",
    "6:00 AM",
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
    "11:00 PM",
  ];

  useEffect(() => {
    const durationCalc = () => {
      const start = allHours.indexOf(startTime);
      const end = allHours.indexOf(endTime);
      const duration = end - start;
      setDuration(duration);
    };
    durationCalc();
  });

  const handelSubmit = (e) => {
    e.preventDefault();

    if (task && startTime && endTime) {
      if (duration > 0) {
        setTasks({
          Task: task,
          StartTime: startTime,
          EndTime: endTime,
          Duration: duration,
        });
      } else {
        alert("Please select at least 1 hour!");
      }
    } else {
      alert("Please select time!");
    }
    setTask("");
    setStartTime("");
    setEndTime("");
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
          <label className={styles.time_picker_text}>
            <h3>Select start time</h3>
            <select
              value={startTime}
              onChange={(e) => {
                setStartTime(e.target.value);
              }}
              className={styles.time_picker_select}
            >
              {allHours.map((hour, index) => (
                <option key={index} value={hour}>
                  {hour}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className={styles.time_picker_area}>
          <label className={styles.time_picker_text}>
            <h3>Select End time</h3>
            <select
              value={endTime}
              onChange={(e) => {
                setEndTime(e.target.value);
              }}
              className={styles.time_picker_select}
            >
              {allHours.map((hour, index) => (
                <option key={index} value={hour}>
                  {hour}
                </option>
              ))}
            </select>
          </label>
        </div>
      </form>
    </div>
  );
}
