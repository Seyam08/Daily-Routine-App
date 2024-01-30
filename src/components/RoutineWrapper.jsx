import styles from "../styles/RoutineWrapper.module.css";
import TaskMaker from "./TaskMaker";

export default function RoutineWrapper() {
  return (
    <div className={styles.rtn_wrapper}>
      <h2 className={styles.app_heading}>Daily Routine App</h2>
      <div className={styles.rtn_layout}>
        <TaskMaker />
        <div>right col</div>
      </div>
    </div>
  );
}
