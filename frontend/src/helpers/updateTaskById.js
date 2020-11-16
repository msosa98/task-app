import Axios from "axios";

export const updateTaskById = async (token, task, id) => {
  let config = {
    headers: { Authorization: token },
  };
  const { data } = await Axios.put(`https://task-app-msosa.herokuapp.com/tasks/${id}`, task, config);
  return data;
}