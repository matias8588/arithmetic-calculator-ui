import { getItem } from "../helpers/localStorage";

const BASE_URL = process.env.REACT_APP_API_URL;

export const newOperation = {
  NewOperation: async function (endpoint: string, operation: any) {
    try {
      const response = await window.fetch(`${BASE_URL}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization: `Bearer ${getItem("token")}` || "",
        },
        body: JSON.stringify(operation),
      });

      return await response.json();
    } catch (error) {
      console.error(error);
    }
  },
};
