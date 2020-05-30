import React, { Dispatch, SetStateAction } from "react";
import { useHasMounted } from "./components/client_only";

export default function useStateWithLocalStorage<T>(
  defaultValue: T,
  key: string
): [T, Dispatch<SetStateAction<T>>] {
  const hasMounted = useHasMounted();

  const [value, setValue] = React.useState(() => {
    const stickyValue = hasMounted ? window.localStorage.getItem(key) : null;
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
