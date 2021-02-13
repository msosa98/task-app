import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { signin } from "../state-management/actions/authActions";
import { loadTasks } from "../state-management/actions/taskAction";
import { getTasks } from "../helpers/getTasks";
import { showAlert } from "../helpers/showAlert";
import { login } from "../helpers/login";
import { Spinner } from "./Spinner";

export const FormLogin = () => {
  const [loading, setLoading] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleChangeUsername = ({ target }) => {
    setUsername(target.value);
  };

  const handleChangePassword = ({ target }) => {
    setPassword(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (username && password) {
      const data = await login(username, password);
      if (data.userExist) {
        dispatch(signin(data));
        const tasks = await getTasks(data.token, data.userExist).then(
          setLoading(false)
        );
        dispatch(loadTasks(tasks));
      } else {
        setLoading(false);
        setError(data.message);
      }
    } else {
      setError("You must enter a username and password");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 mt-5 shadow-sm">
      <h2 className="text-center mb-4 border-bottom py-4">Sign In</h2>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Username</label>
        <input
          type="text"
          className="form-control"
          onChange={handleChangeUsername}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          onChange={handleChangePassword}
        />
      </div>
      <div className="form-group form-check" />
      <button className="btn btn-primary btn-block">Sign In</button>
      <div className="spinner-container mt-4">{loading && <Spinner />}</div>
      {error && showAlert("danger", error)}
    </form>
  );
};
