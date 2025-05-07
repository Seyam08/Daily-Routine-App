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
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };
  const handleMasterCheckbox = () => {
    const allComplete = tasks.every((task) => task.state === "Complete");
    const updatedTasks = tasks.map((task) => ({
      ...task,
      state: allComplete ? "Incomplete" : "Complete",
    }));
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
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
      localStorage.setItem("tasks", JSON.stringify(editedTask));
      setEditTaskName("");
    } else {
      alert("Please provide a valid name!");
    }
  };
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
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
          <th className="p-1 md:p-4">
            <CheckBox onClick={handleMasterCheckbox} />
          </th>
          <Table.HeadCell className="py-3 pl-1 md:py-5 md:pl-4 text-sm md:text-base">
            Tasks name
          </Table.HeadCell>
          <Table.HeadCell className="py-3 pl-1 md:py-5 md:pl-4 text-sm md:text-base">
            Status
          </Table.HeadCell>
          <Table.HeadCell className="py-3 pl-1 md:py-5 md:pl-4 text-sm md:text-base">
            Start From
          </Table.HeadCell>
          <Table.HeadCell className="py-3 pl-1 md:py-5 md:pl-4 text-sm md:text-base">
            End to
          </Table.HeadCell>
          <Table.HeadCell className="py-3 pl-1 md:py-5 md:pl-4 text-sm md:text-base">
            Duration
          </Table.HeadCell>
          <Table.HeadCell className="py-3 pl-1 md:py-5 md:pl-4">
            Modify
          </Table.HeadCell>
        </Table.Head>

        <Table.Body className={styles.table_body_area}>
          {tasks.map((task) => (
            <Table.Row className="bg-white" key={task.id}>
              <td className="p-1 md:p-4">
                <CheckBox
                  checked={task.state === "Complete"}
                  onChange={() => handleCheckbox(task.id)}
                />
              </td>
              <Table.Cell className="p-1 md:p-4">
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
              <Table.Cell className="p-1 md:p-4">
                <p className={styles.task_info}>{task.state}</p>
              </Table.Cell>
              <Table.Cell className="p-1 md:p-4">
                <p className={styles.task_info}>{task.StartTime}</p>
              </Table.Cell>
              <Table.Cell className="p-1 md:p-4">
                <p className={styles.task_info}>{task.EndTime}</p>
              </Table.Cell>
              <Table.Cell className="p-1 md:p-4">
                <p className={styles.task_info}>{task.Duration} hours</p>
              </Table.Cell>
              <Table.Cell className="p-1 md:p-4">
                {task.isEditing ? (
                  <span className={styles.icon_gap}>
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
                  <span className={styles.icon_gap}>
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      size="xl"
                      onClick={() => editTask(task.id)}
                      className="cursor-pointer"
                    />
                  </span>
                )}

                <span className={styles.icon_gap}>
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
