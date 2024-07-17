import Sidebar from "./Sidebar";
import { authenticate } from "../../functions/utils";
import { Outlet } from "react-router-dom";
import UserContextProvider from "../context/UserContextProvider";

export default function UserPage() {
  // Make sure user is logged in.
  authenticate();

  return (
    <UserContextProvider>
      <div className="flex min-h-lvh">
        <Sidebar />
        <Outlet />
      </div>
    </UserContextProvider>
  );
}
