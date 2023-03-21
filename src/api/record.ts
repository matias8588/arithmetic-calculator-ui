import { getItem } from "../helpers/localStorage";

const BASE_URL = process.env.REACT_APP_API_URL;

export const record = {
  UserRecord: async function (endpoint: string) {
    try {
      const response = await window.fetch(`${BASE_URL}${endpoint}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization: `Bearer ${getItem("token")}` || "",
        },
      });
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  },
  RemoveOperation: async function (endpoint: string) {
    try {
      const response = await window.fetch(`${BASE_URL}${endpoint}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization: `Bearer ${getItem("token")}` || "",
        },
      });
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  },
};
