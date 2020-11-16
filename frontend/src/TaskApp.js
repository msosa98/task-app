import React from "react";
import { useSelector } from "react-redux";

import { PrivateRoutes } from "./routes/PrivateRoutes";
import { PublicRoutes } from "./routes/PublicRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/TaskApp.css";

export const TaskApp = () => {
  const { auth } = useSelector((state) => state.auth);
  return auth ? <PrivateRoutes /> : <PublicRoutes />;
};
