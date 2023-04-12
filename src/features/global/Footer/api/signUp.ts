import { API_URL } from "../../../../config";

export const signUp = (email: string): Promise<void> => {
  return fetch(`${API_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email.toLowerCase() }),
  }).then((response) => {
    if (response.ok) {
      return Promise.resolve();
    } else {
      return Promise.reject(new Error("Failed to sign up"));
    }
  });
};
