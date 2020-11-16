import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BtnLogout } from "./BtnLogout";
import { saveTask } from "../helpers/saveTask";
import { addTask } from "../state-management/actions/taskAction";
import { showAlert } from "../helpers/showAlert";

export const TaskInput = () => {

  const { token, user } = useSelector((state) => state.auth);
  const [input, setInput] = useState("");
  const [error, setError] = useState();

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setInput(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const task = { description: input, status: false, author: user };
    if (input && input.length >= 5) {
      setError(false);
      await saveTask(token, task)
      .then(task => dispatch(addTask(task)))
      .catch(console.log);
      setInput("");
    } else {
      setError(true);
    }
  };

  return (
    <form onSubmit={ handleSubmit }>
      <div className="form-group">
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Save a task"
          value={ input }
          onChange={ handleChange }
        />
        <button className="btn btn-primary btn-block">Save</button>
      </div>
      { error && showAlert("danger","The task must contain at least 5 characters") }
      <BtnLogout />
    </form>
  );
};
