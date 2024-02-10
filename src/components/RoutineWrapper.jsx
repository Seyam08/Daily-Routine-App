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
      completed: false,
      isEditing: false,
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
        completed: false,
        isEditing: false,
      },
    ]);
  };
  // console.log(tasks);
  return (
    <div className={styles.rtn_wrapper}>
      <h2 className={styles.app_heading}>Daily Routine App</h2>
      <div className={styles.rtn_layout}>
        <TaskMaker setTasks={addTasks} />
        {/* {tasks.map((task) => (
          <Task key={task.id} task={task} />
          // console.log(task);
        ))} */}
        <Task key={tasks.id} tasks={tasks} />
      </div>
    </div>
  );
}
