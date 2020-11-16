import Axios from "axios";

export const register = async (username, password) => {
  const { data } = await Axios.post("https://task-app-msosa.herokuapp.com/signup", {username, password});
  return data;
}
