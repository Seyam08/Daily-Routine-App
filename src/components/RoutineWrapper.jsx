import { useState } from "react";
import styles from "../styles/RoutineWrapper.module.css";
import Task from "./Task";
import TaskMaker from "./TaskMaker";

export default function RoutineWrapper() {
  const [tasks, setTasks] = useState({
    Task: "Let's do something",
    StartTime: "8:45pm",
    EndTime: "12:00pm",
  });
  console.log(tasks);

  return (
    <div className={styles.rtn_wrapper}>
      <h2 className={styles.app_heading}>Daily Routine App</h2>
      <div className={styles.rtn_layout}>
        <TaskMaker setTasks={setTasks} />
        <Task></Task>
      </div>
    </div>
  );
}
