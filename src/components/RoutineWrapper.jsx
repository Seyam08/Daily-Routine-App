import { useState } from "react";
import styles from "../styles/RoutineWrapper.module.css";
import TaskMaker from "./TaskMaker";

export default function RoutineWrapper() {
  const [tasks, setTasks] = useState();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();

  console.log(tasks);
  console.log(from);
  console.log(to);

  return (
    <div className={styles.rtn_wrapper}>
      <h2 className={styles.app_heading}>Daily Routine App</h2>
      <div className={styles.rtn_layout}>
        <TaskMaker setTasks={setTasks} setFrom={setFrom} setTo={setTo} />
        <div>right col</div>
      </div>
    </div>
  );
}
