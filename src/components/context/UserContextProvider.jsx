import { useState, createContext, useEffect } from "react";
import { createSocket } from "../../functions/utils";
import Loading from "../misc/Loading";
import { getUser } from "../../functions/user";

export const UserContext = createContext({ user: {}, setUser: () => {} });

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function populateUser() {
      const user = await getUser();

      // Set up a web socket.
      createSocket(user._id);

      setUser(user);
    }

    populateUser();
  }, []);

  if (!user) {
    return (
      <div className="flex min-h-svh bg-light-pink">
        <Loading />
      </div>
    );
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
