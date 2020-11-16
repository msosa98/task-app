import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./state-management/store/store";

import { TaskApp } from "./TaskApp";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <TaskApp />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
