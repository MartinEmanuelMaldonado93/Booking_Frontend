import { KEY_STORAGE } from "@utils";
import getUserFromLocalStorage from "./getUserFromLocalStorage";

export function authHeader() {
  const user = getUserFromLocalStorage(KEY_STORAGE);
  if (!user)
    return;
  if (!user.token)
    return;

  return {
    headers: {
      Authorization: "Bearer " + user.token,
    },
  };
}
