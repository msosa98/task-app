import Axios from "axios";

export const deleteTaskById = async (token, id) => {
  let config = {
    headers: { Authorization: token },
  };
  const { data } = await Axios.delete(`https://task-app-msosa.herokuapp.com/tasks/${id}`, config);
  return data;
}