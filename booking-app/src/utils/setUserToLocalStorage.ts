import { UserInfo } from "src/models";

function setUserToLocalStorage(KEY_STORAGE: string, user: UserInfo | null) {
  localStorage.setItem(KEY_STORAGE, JSON.stringify(user));
}

export default setUserToLocalStorage;
