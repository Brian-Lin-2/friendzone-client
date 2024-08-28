import { useContext } from "react";
import { UserContext } from "../components/context/UserContextProvider";
import { token } from "./utils";

// Custom Hook.
function useUser() {
  return useContext(UserContext);
}

export async function getUser() {
  try {
    const res = await fetch("http://142.93.205.229/user", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    return data.user;
  } catch (err) {
    // This should never be reached.
    localStorage.clear();
    window.location.href = "http://localhost:5173";
  }
}

export async function getRequests() {
  try {
    const res = await fetch("http://142.93.205.229/user/friend-request", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    return data.friend_requests;
  } catch (err) {
    // This should never be reached.
    console.log(err);
  }
}

export default useUser;
