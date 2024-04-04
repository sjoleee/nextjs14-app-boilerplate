import axios from "axios";

const http = axios.create();

http.interceptors.response.use((res) => res.data);

export const get = <T>(...args: Parameters<typeof http.get>): Promise<T> => {
  return http.get<T, T>(...args);
};

export const post = <T>(...args: Parameters<typeof http.post>): Promise<T> => {
  return http.post<T, T>(...args);
};

export const put = <T>(...args: Parameters<typeof http.put>): Promise<T> => {
  return http.put<T, T>(...args);
};

export const patch = <T>(...args: Parameters<typeof http.patch>): Promise<T> => {
  return http.patch<T, T>(...args);
};

export const del = <T>(...args: Parameters<typeof http.delete>): Promise<T> => {
  return http.delete<T, T>(...args);
};
