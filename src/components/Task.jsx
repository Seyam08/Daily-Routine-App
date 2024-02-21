import {
  faCheck,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, CheckBox, Table } from "keep-react";
import { useState } from "react";
import styles from "../styles/Task.module.css";

export default function Task({ tasks, setTasks }) {
  const [editTaskName, setEditTaskName] = useState("");
  const handleCheckbox = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? {
            ...task,
            state: task.state === "Complete" ? "Incomplete" : "Complete",
          }
        : task
    );
    setTasks(updatedTasks);
  };
  const handleMasterCheckbox = () => {
    const allComplete = tasks.every((task) => task.state === "Complete");
    const updatedTasks = tasks.map((task) => ({
      ...task,
      state: allComplete ? "Incomplete" : "Complete",
    }));
    setTasks(updatedTasks);
  };
  const editTask = (taskId) => {
    const editedTask = tasks.map((task) =>
      task.id === taskId
        ? {
            ...task,
            isEditing: true,
          }
        : task
    );
    setTasks(editedTask);
  };

  const submitEditTask = (taskId) => {
    if (editTaskName) {
      const editedTask = tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              Task: editTaskName,
              isEditing: false,
            }
          : task
      );
      setTasks(editedTask);
      setEditTaskName("");
    } else {
      alert("Please provide a valid name!");
    }
  };
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };
  return (
    <div className={styles.task_display_area}>
      <Table>
        <Table.Caption>
          <div className={styles.table_caption_area}>
            <div>
              <Badge size="sm" colorType="light" color="gray">
                {tasks.length}
              </Badge>
              <p>Tasks</p>
            </div>
          </div>
        </Table.Caption>

        <Table.Head>
          <th className="p-4">
            <CheckBox onClick={handleMasterCheckbox} />
          </th>
          <Table.HeadCell>
            <p className={styles.table_head_text}>Tasks name</p>
          </Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>Start From</Table.HeadCell>
          <Table.HeadCell>End to</Table.HeadCell>
          <Table.HeadCell>Duration</Table.HeadCell>
          <Table.HeadCell>Modify</Table.HeadCell>
        </Table.Head>

        <Table.Body className={styles.table_body_area}>
          {tasks.map((task) => (
            <Table.Row className="bg-white" key={task.id}>
              <th className="p-4">
                <CheckBox
                  checked={task.state === "Complete"}
                  onChange={() => handleCheckbox(task.id)}
                />
              </th>
              <Table.Cell>
                {task.isEditing ? (
                  <input
                    onChange={(e) => setEditTaskName(e.target.value)}
                    value={editTaskName}
                    className={styles.edit_task_input}
                  />
                ) : (
                  <p className={styles.task_name}>{task.Task}</p>
                )}
              </Table.Cell>
              <Table.Cell>
                <p className={styles.task_info}>{task.state}</p>
              </Table.Cell>
              <Table.Cell>
                <p className={styles.task_info}>{task.StartTime}</p>
              </Table.Cell>
              <Table.Cell>
                <p className={styles.task_info}>{task.EndTime}</p>
              </Table.Cell>
              <Table.Cell>
                <p className={styles.task_info}>{task.Duration} hours</p>
              </Table.Cell>
              <Table.Cell>
                {task.isEditing ? (
                  <span className="p-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="xl"
                      onClick={() => {
                        submitEditTask(task.id);
                      }}
                      className="cursor-pointer"
                    />
                  </span>
                ) : (
                  <span className="p-3">
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      size="xl"
                      onClick={() => editTask(task.id)}
                      className="cursor-pointer"
                    />
                  </span>
                )}

                <span className="p-3">
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    size="xl"
                    onClick={() => deleteTask(task.id)}
                    className="cursor-pointer"
                  />
                </span>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
