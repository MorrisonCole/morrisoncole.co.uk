export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className={"dark: bg-blue-500 dark:text-white shadow-md rounded"}>
      {children}
    </button>
  );
}
