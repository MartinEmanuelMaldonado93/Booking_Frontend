function getUserFromLocalStorage<T>(KEY_STORAGE: string): null | T {
  //if it is in SSR enviroment
  if (typeof window === "undefined") return null;

  const itemJson: string | null = window.localStorage.getItem(KEY_STORAGE);
  const itemObject = itemJson ? (JSON.parse(itemJson) as T) : null;
  return itemObject;
}
export default getUserFromLocalStorage;
