import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';

import useEventCallback from './useEventCallback';
import useEventListener from './useEventListener';

declare global {
  interface WindowEventMap {
    'local-storage': CustomEvent;
  }
}

type SetValue<T> = Dispatch<SetStateAction<T>>;
/**
 * Persist the state with local storage so that it remains after a page refresh. This can be useful for a dark theme
 * This hook is used in the same way as useState except that you must pass the storage key in the 1st parameter
 * @param key
 * @param initialValue
 * @returns
 */
function useLocalStorage<T>(key: string, initialValue: T): [T, SetValue<T>] {
  // Get from local storage then
  // parse stored json or return initialValue
  const readValue = useCallback((): T => {
    // Prevent build error "window is undefined" but keeps working, in SSR enviroments
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item: string | null = window.localStorage.getItem(key); // if that key exists !
      console.log('item LS', item);
      return item ? (parseJSON(item) as T) : initialValue; // if it not exist set initialValue
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error);
      return initialValue;
    }
  }, [initialValue, key]);

  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(readValue);
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue: SetValue<T> = useEventCallback((value) => {
    // Prevent build error "window is undefined" but keeps working
    if (typeof window === 'undefined') {
      console.warn(
        `Tried setting localStorage key “${key}” even though environment is not a client`
      );
    }

    try {
      // Allow value to be a function so we have the same API as useState
      const newValue = value instanceof Function ? value(storedValue) : value;

      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(newValue));

      // Save state
      setStoredValue(newValue);

      // We dispatch a custom event so every useLocalStorage hook are notified
      window.dispatchEvent(new Event('local-storage'));
    } catch (error) {
      console.warn(`Error setting localStorage key “${key}”:`, error);
    }
  });

  useEffect(() => {
    setStoredValue(readValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleStorageChange = useCallback(
    (event: StorageEvent | CustomEvent) => {
      if ((event as StorageEvent)?.key && (event as StorageEvent).key !== key) {
        return;
      }
      setStoredValue(readValue());
    },
    [key, readValue]
  );

  // this only works for other documents, not the current one
  useEventListener('storage', handleStorageChange);

  // this is a custom event, triggered in writeValueToLocalStorage
  // See: useLocalStorage()
  useEventListener('local-storage', handleStorageChange);
  return [storedValue, setValue];
}

export default useLocalStorage;

// A wrapper for "JSON.parse()"" to support "undefined" value
function parseJSON<T>(value: string | null): T | undefined {
  try {
    return value === 'undefined' ? undefined : JSON.parse(value ?? '');
  } catch {
    console.log('parsing error on', { value });
    return undefined;
  }
}
