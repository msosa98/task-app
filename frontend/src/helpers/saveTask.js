import Axios from "axios";

export const saveTask = async (token, task) => {
  let config = {
    headers: { Authorization: token },
  };
  const { data } = await Axios.post("https://task-app-msosa.herokuapp.com/tasks",task,config);
  return data;
}