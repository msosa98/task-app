import Axios from "axios";

export const getTasks = async (token, user) => {
  let config = {
    headers: { Authorization: token },
  };
  const { data } = await Axios.get(`https://task-app-msosa.herokuapp.com/tasks/${user._id}`, config);
  return data.map(task => {
    return { id: task._id, description: task.description, status: task.status };
  });
}