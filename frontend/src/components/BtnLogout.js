import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../state-management/actions/authActions";
import { cleanTasks } from "../state-management/actions/taskAction";

export const BtnLogout = () => {
  
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
    dispatch(cleanTasks());
  };

  return (
    <button onClick={handleClick} className="btn btn-outline-danger btn-block">
      Logout
    </button>
  );
};
