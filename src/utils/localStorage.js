const storageKeyForTask = "tasks";
const storageKeyForAuth = "userInfo"

export const setLocalStorageForTask = (taskInfo) => {
  localStorage.setItem(storageKeyForTask, JSON.stringify(taskInfo));
};

export const getLocalStorageForTask = () => {
  const storage = localStorage.getItem(storageKeyForTask);
  if (!storage) return [];
  const data = JSON.parse(storage);
  return data;
};

export const setLocalStorageForAuth = (loginInfo) => {
  localStorage.setItem(storageKeyForAuth, JSON.stringify(loginInfo));
};

export const getLocalStorageForAuth = () => {
  localStorage.getItem(storageKeyForAuth);
}
