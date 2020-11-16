import { types } from "../types/types";

export const signin = ({userExist, token}) => ({
  type: types.signin,
  payload: {userExist, token}
});

export const logout = () => ({
  type: types.logout,
});
