import { User } from "./model";

export const validateParameters = (user: User) => {
  const { firstName, lastName, password } = user;
  if (firstName && lastName && password) {
    return true;
  }
  return false;
};
