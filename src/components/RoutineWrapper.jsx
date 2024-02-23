import { useEffect, useState } from "react";
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
  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [
      {
        id: uniqid(),
        Task: "Go for walk",
        StartTime: "6:00am",
        EndTime: "7:00am",
        isEditing: false,
        Duration: 2,
        state: "Incomplete",
      },
    ];
    setTasks(tasks);
  }, [setTasks]);

  const addTasks = (task) => {
    const newTasks = [
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
    ];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  return (
    <div className={styles.rtn_wrapper}>
      <h2 className={styles.app_heading}>Daily Routine App</h2>
      <div className={styles.rtn_layout}>
        <TaskMaker setTasks={addTasks} />
        <Task key={tasks.id} tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}
