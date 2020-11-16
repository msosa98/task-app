import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-5">
          <div className="card mt-5 text-center">
            <div className="card-body">
              <div className="row">
                <div className="col-12 col-md-6 p-4">
                  <h2>Task App</h2>
                  <hr />
                  <h5 className="mb-5">
                    Manage your daily tasks with Task App
                  </h5>
                  <Link
                    to="/signin"
                    className="btn btn-outline-primary btn-block p-2 mb-4"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="btn btn-outline-secondary btn-block p-2"
                  >
                    Sign Up
                  </Link>
                </div>
                <div className="col-12 col-md-6">
                  <img
                    className="img-fluid"
                    src={window.location.origin + "/img/home.png"}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
