import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateTaskById } from "../helpers/updateTaskById";
import { deleteTaskById } from "../helpers/deleteTaskById";
import { deleteTask, doneTask } from "../state-management/actions/taskAction";

export const TaskItem = ({ id, description, status }) => {

  const { token, user } = useSelector(state => state.auth);
  const [state, setState] = useState(status);
  const dispatch = useDispatch();

  const handleDone = () => {
    const task = { description, status: !state, author: user };
    updateTaskById(token, task, id)
        .then(task => dispatch(doneTask(task._id)))
        .then(setState(!state));
  }

  const handleDelete = () => {
    deleteTaskById(token, id).then(task => dispatch(deleteTask(task._id)));
  }

  return (
    <tr>
      <td>
        { state ? <p className="text-underline">{description}</p> : <p>{description}</p> }
      </td>
      <td>
        <button onClick={ handleDone } className="btn btn-outline-primary">Done</button>
      </td>
      <td>
        <button onClick={ handleDelete } className="btn btn-outline-danger">Delete</button>
      </td>
    </tr>
  );
};
