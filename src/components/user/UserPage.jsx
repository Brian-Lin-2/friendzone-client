import Sidebar from "./Sidebar";
import { authenticate } from "../../functions/utils";
import { Outlet } from "react-router-dom";
import UserContextProvider from "../context/UserContextProvider";
import { useState } from "react";

export default function UserPage() {
  // Make sure user is logged in.
  authenticate();

  const [showMenu, setShowMenu] = useState(true);

  return (
    <UserContextProvider>
      <div className="flex min-h-svh">
        <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />

        <div className={`${showMenu ? "hidden" : "flex"} md:flex flex-grow`}>
          <Outlet />
        </div>
      </div>
    </UserContextProvider>
  );
}
