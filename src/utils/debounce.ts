// debounce: Returns a debounced version of a function
export function debounce<T extends (...args: any[]) => void>(fn: T, delay: number) {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let lastArgs: any[];
  const debounced = (...args: any[]) => {
    lastArgs = args;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...lastArgs);
    }, delay);
  };
  debounced.cancel = () => {
    if (timeout) clearTimeout(timeout);
    timeout = null;
  };
  return debounced as T & { cancel: () => void };
}
