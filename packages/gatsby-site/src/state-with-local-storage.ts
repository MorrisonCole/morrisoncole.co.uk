import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function useStateWithLocalStorage<T>(
  defaultValue: T,
  key: string
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
