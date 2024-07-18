import { useState, createContext, useEffect } from "react";
import { token, createSocket } from "../../functions/utils";

export const UserContext = createContext({ user: {}, setUser: () => {} });

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function populateUser() {
      const res = await fetch("http://localhost:3000/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      // Set up a web socket.
      createSocket(data.user._id);

      setUser(data.user);
    }

    populateUser();
  }, []);

  if (!user) {
    return <h1>Loading</h1>;
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
