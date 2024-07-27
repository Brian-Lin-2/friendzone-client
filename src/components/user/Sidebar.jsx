import { NavLink } from "react-router-dom";
import User from "./User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faUser,
  faSquarePlus,
  faBell,
} from "@fortawesome/free-regular-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar({ showMenu, setShowMenu }) {
  const linkStyling = "hover:text-active-pink flex items-center gap-4 py-4";
  const activeStyling = "text-active-pink border-r-2 border-active-pink ";

  return (
    <>
      <button
        className={"absolute right-6 top-8 md:hidden"}
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? (
          <FontAwesomeIcon className="h-6" icon={faXmark} />
        ) : (
          <FontAwesomeIcon className="h-6" icon={faBars} />
        )}
      </button>
      <div
        className={`pl-8 py-8 flex-grow md:flex-grow-0 md:flex flex-col md:w-[450px] justify-between bg-pink ${
          showMenu ? "flex" : "hidden"
        }`}
      >
        <div>
          <img className="w-12 mb-16" src="/images/logo.png" />

          <div className="flex flex-col justify-end text-lg">
            <NavLink
              className={({ isActive }) =>
                `${linkStyling} ${isActive ? activeStyling : ""}`
              }
              to="."
              onClick={() => setShowMenu(false)}
              end
            >
              <FontAwesomeIcon icon={faComments} />
              messages
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${linkStyling} ${isActive ? activeStyling : ""}`
              }
              to="profile"
              onClick={() => setShowMenu(false)}
              end
            >
              <FontAwesomeIcon icon={faUser} />
              edit profile
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${linkStyling} ${isActive ? activeStyling : ""}`
              }
              to="add-friend"
              onClick={() => setShowMenu(false)}
              end
            >
              <FontAwesomeIcon icon={faSquarePlus} />
              add friend
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${linkStyling} ${isActive ? activeStyling : ""}`
              }
              to="friend-requests"
              onClick={() => setShowMenu(false)}
              end
            >
              <FontAwesomeIcon icon={faBell} />
              friend requests
            </NavLink>
          </div>
        </div>

        <User />
      </div>
    </>
  );
}
