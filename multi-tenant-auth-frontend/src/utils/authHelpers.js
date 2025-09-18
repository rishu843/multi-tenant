export const getToken = () => {
  const data = localStorage.getItem("auth");
  return data ? JSON.parse(data) : null;
};

export const setToken = (data) => {
  localStorage.setItem("auth", JSON.stringify(data));
};

export const clearToken = () => {
  localStorage.removeItem("auth");
};
