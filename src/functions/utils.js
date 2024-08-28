import { io } from "socket.io-client";

export function isLoggedIn() {
  if (token) {
    // We want to always redirect to the user page.
    window.location.href = "https://friendzone-client.vercel.app/user";
  }
}

export function authenticate() {
  // Checks to see if there's a user.
  if (!token) {
    window.location.href = "https://friendzone-client.vercel.app/login";
  }
}

let socket = null;

export function createSocket(userId) {
  if (!socket) {
    socket = io("http://www.friendzone-server.online", {
      query: {
        userId,
      },
    });

    // Socket events.
    socket.on("connect", () => {
      console.log(`Socket connected: ${socket.id}`);
    });

    socket.on("disconnect", async () => {
      socket = null;

      // Clean off any listeners.
      socket.off();

      if (guest) {
        await fetch("http://www.friendzone-server.online/user", {
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
  }
}

const token = localStorage.getItem("token");
const guest = localStorage.getItem("guest");

export { token, guest, socket };
