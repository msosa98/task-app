import Axios from "axios";

export const login = async (username, password) => {
  const { data } = await Axios.post("https://task-app-msosa.herokuapp.com/signin", {username, password});
  return data;
}