import { io } from "socket.io-client";

export function isLoggedIn() {
  if (sessionStorage.getItem("token")) {
    // We want to always redirect to the user page.
    window.location.href = "http://localhost:5173/user";
  }
}

export function authenticate() {
  // Checks to see if there's a user.
  if (!sessionStorage.getItem("token")) {
    window.location.href = "http://localhost:5173/login";
  }
}

let socket = null;

export function createSocket(userId) {
  if (!socket) {
    socket = io("http://127.0.0.1:3000", {
      query: {
        userId,
      },
    });

    socket.on("connect", () => {
      console.log("Socket connected:", socket.id);
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected:", socket.id);
      socket = null;
    });
  }
}

export function disconnectSocket() {
  if (socket) {
    socket.disconnect();
    socket = null; // Ensure to reset socket to null
  }
}

const token = sessionStorage.getItem("token");
const demo = sessionStorage.getItem("demo");

export { token, demo, socket };
