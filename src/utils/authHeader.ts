import { UserInfo } from "@types";
import { KEY_STORAGE } from "@utils";
import getUserFromLocalStorage from "./getUserFromLocalStorage";

export function getAuthHeader() {
  const user = getUserFromLocalStorage<UserInfo>(KEY_STORAGE);
  if (!user) return null;
  if (!user.token) return null;

  return {
    headers: {
      Authorization: "Bearer " + user.token,
    },
  };
}
