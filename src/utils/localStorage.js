const storageKey = "tasks";

export const setLocalStorage = (taskInfo) => {
  localStorage.setItem(storageKey, JSON.stringify(taskInfo));
};

export const getLocalStorage = () => {
  const storage = localStorage.getItem(storageKey);
  if (!storage) return [];
  const data = JSON.parse(storage);
  return data;
};
