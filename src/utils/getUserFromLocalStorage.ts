import { UserInfo } from "@types";

function getUserFromLocalStorage(KEY_STORAGE: string) {
  const userJSON = localStorage.getItem(KEY_STORAGE);
  const userFromStorage = userJSON ? (JSON.parse(userJSON) as UserInfo) : null;
  return userFromStorage;
}
export default getUserFromLocalStorage;
