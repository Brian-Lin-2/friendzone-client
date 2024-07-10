import { Link } from "react-router-dom";
import User from "./User";

export default function Sidebar() {
  return (
    <div className="pl-8 py-8 border flex flex-col min-h-lvh w-52 border-red-500 justify-between">
      <div className="">
        <img className="w-12" src="/images/favicon.png" />

        <div className="flex flex-col justify-end items-end">
          <Link to="">messages</Link>
          <Link to="profile">profile</Link>
          <Link to="add-friend">add friend</Link>
          <Link to="create-group">create group</Link>
        </div>
      </div>

      <User />
    </div>
  );
}
