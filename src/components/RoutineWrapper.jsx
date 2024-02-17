import { useState } from "react";
import uniqid from "uniqid";
import styles from "../styles/RoutineWrapper.module.css";
import Task from "./Task";
import TaskMaker from "./TaskMaker";

export default function RoutineWrapper() {
  const [tasks, setTasks] = useState([
    {
      id: uniqid(),
      Task: "Go for walk",
      StartTime: "6:00am",
      EndTime: "7:00am",
      isEditing: false,
      Duration: 2,
      state: "Incomplete",
    },
  ]);
  const addTasks = (task) => {
    setTasks([
      ...tasks,
      {
        id: uniqid(),
        Task: task.Task,
        StartTime: task.StartTime,
        EndTime: task.EndTime,
        isEditing: false,
        Duration: task.Duration,
        state: "Incomplete",
      },
    ]);
  };

  return (
    <div className={styles.rtn_wrapper}>
      <h2 className={styles.app_heading}>Daily Routine App</h2>
      <div className={styles.rtn_layout}>
        <TaskMaker setTasks={addTasks} />
        {console.log(tasks)}
        <Task key={tasks.id} tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}
