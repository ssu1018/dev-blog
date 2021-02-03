export const customFunc = {
  entries<T>(obj: T): { [K in keyof T]: [K, T[K]] }[keyof T][] {
    return Object.entries(obj) as Array<{ [K in keyof T]: [K, T[K]] }[keyof T]>;
  },
};
