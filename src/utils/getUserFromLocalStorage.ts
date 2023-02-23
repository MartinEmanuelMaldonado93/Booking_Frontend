function getUserFromLocalStorage<T>(KEY_STORAGE: string): null | T {
  //if it is in SSR enviroment
  if (typeof window === "undefined") return null;

  const itemJson = window.localStorage.getItem(KEY_STORAGE);
  const itemObj = itemJson ? (JSON.parse(itemJson) as T) : null;
  return itemObj;
}

export default getUserFromLocalStorage;
