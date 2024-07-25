import { io } from "socket.io-client";

export function isLoggedIn() {
  if (token) {
    // We want to always redirect to the user page.
    window.location.href = "http://localhost:5173/user";
  }
}

export function authenticate() {
  // Checks to see if there's a user.
  if (!token) {
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
      console.log(`Socket connected: ${socket.id}`);
    });

    socket.on("disconnect", async () => {
      socket = null;

      if (guest) {
        await fetch("http://127.0.0.1:3000/user", {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
    });
  }
}

export function disconnectSocket() {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
}

const token = localStorage.getItem("token");
const guest = localStorage.getItem("guest");

export { token, guest, socket };
