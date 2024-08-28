import { useContext } from "react";
import { UserContext } from "../components/context/UserContextProvider";
import { token } from "./utils";

// Custom Hook.
function useUser() {
  return useContext(UserContext);
}

export async function getUser() {
  try {
    const res = await fetch("https://www.friendzone-server.online/user", {
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
    window.location.href = "https://friendzone-client.vercel.app";
  }
}

export async function getRequests() {
  try {
    const res = await fetch(
      "https://www.friendzone-server.online/user/friend-request",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();

    return data.friend_requests;
  } catch (err) {
    // This should never be reached.
    console.log(err);
  }
}

export default useUser;
