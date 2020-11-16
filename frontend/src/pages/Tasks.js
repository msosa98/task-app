import React from "react";

import { TaskInput } from "../components/TaskInput";
import { TaskGrid } from "../components/TaskGrid";

export const Tasks = () => {
  return (
      <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 offset-md-4 my-5">
              <TaskInput/>
            </div>
            <div className="col-12 col-md-6 offset-md-3">
              <TaskGrid/>
            </div>
          </div>
      </div>
  );
};
