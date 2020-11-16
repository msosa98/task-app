import React from "react";
import { FormLogin } from "../components/FormLogin";

export const Login = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3 mt-5">
          <FormLogin />
        </div>
      </div>
    </div>
  );
};
