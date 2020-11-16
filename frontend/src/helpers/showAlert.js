import React from "react";
import {Link} from "react-router-dom";

export const showAlert = (color, msg, bool=false) => (
    <div className={`alert alert-${color} text-center mt-4`} role="alert">
      { msg }
      { bool && <Link to="/signin"> Login</Link> }
    </div>
);