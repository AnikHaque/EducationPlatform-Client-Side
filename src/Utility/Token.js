import { jwtDecode } from "jwt-decode";

const getToken = () => {
  // Check if token exists in localStorage
  const localStorageToken = localStorage.getItem("token");
  if (localStorageToken) {
    return localStorageToken;
  }

  // If token not found in localStorage, check cookies
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="));
  if (cookieValue) {
    return cookieValue.split("=")[1];
  }

  // If token not found in cookies or localStorage, return null
  return null;
};

export const setToken = (token) => {
  localStorage.setItem("token", token);

  // Set token as a cookie
  document.cookie = `token=${token}; path=/; SameSite=Strict`;
};

export const removeToken = () => {
  localStorage.removeItem("token");
};

export const removeUserData = () => {
  localStorage.removeItem("userData");
};

export const removeTokenFromCookie = () => {
  // Set the expiry date of the cookie to a past date to delete it
  document.cookie = "token=; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/;";
};

export const decodeToken = () => {
  const token = getToken();
  if (token) {
    return jwtDecode(token);
  }
  return null;
};
