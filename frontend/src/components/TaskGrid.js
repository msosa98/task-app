import React from "react";
import { useSelector } from "react-redux";

import { TaskItem } from "./TaskItem";
import { showAlert } from "../helpers/showAlert";

export const TaskGrid = () => {
  const { tasks } = useSelector((state) => state.tasks);

  return (
    <>
      {!tasks || tasks.length === 0 ? (
        showAlert("info", "You have no pending tasks")
      ) : (
        <table className="table border shadow-sm">
          <thead className="thead-light">
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Done</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <TaskItem
                key={Math.random()}
                id={task.id}
                description={task.description}
                status={task.status}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
