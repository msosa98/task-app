import React, { useState } from "react";

import { showAlert } from "../helpers/showAlert";
import { register } from "../helpers/register";
import { Spinner } from "./Spinner";

export const FormRegister = () => {
  const [loading, setLoading] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [logged, setLogged] = useState(false);
  const [error, setError] = useState();

  const handleChangeUsername = ({ target }) => {
    setUsername(target.value);
  };

  const handleChangePassword = ({ target }) => {
    setPassword(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (username && password && username.length >= 5 && password.length >= 5) {
      const data = await register(username, password).then(setLoading(false));
      data.username ? setLogged(true) : setError(data.message);
    } else {
      setLoading(false);
      setError("Username and password must contain at least 5 characters");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 mt-5 shadow-sm">
      <h2 className="text-center mb-4 border-bottom py-4">Sign Up</h2>
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
      <button className="btn btn-primary btn-block">Sign Up</button>
      <div className="spinner-container mt-4">{loading && <Spinner />}</div>
      {error && !logged && showAlert("danger", error)}
      {logged && showAlert("success", "Successfully registered user", true)}
    </form>
  );
};
