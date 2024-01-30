import { useState } from "react";
import styles from "../styles/TaskMaker.module.css";

export default function TaskMaker() {
  const [task, setTask] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(task);
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
          />
          <button type="submit" className={styles.add_task_btn}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
