import styles from "../styles/RoutineWrapper.module.css";

export const RoutineWrapper = () => {
  return (
    <div className={styles.rtn_wrapper}>
      <h2 className={styles.app_heading}>Daily Routine App</h2>
      <div className={styles.rtn_layout}>
        <div>left col</div>
        <div>right col</div>
      </div>
    </div>
  );
};
