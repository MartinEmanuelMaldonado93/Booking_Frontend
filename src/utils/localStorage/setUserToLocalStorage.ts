function setUserToLocalStorage<T>(KEY_STORAGE: string, item: T) {
  if (typeof window === "undefined") return null;

  window.localStorage.setItem(KEY_STORAGE, JSON.stringify(item));
  return item;
}

export default setUserToLocalStorage;
