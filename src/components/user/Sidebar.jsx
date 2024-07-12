import { NavLink } from "react-router-dom";
import User from "./User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faUser,
  faSquarePlus,
} from "@fortawesome/free-regular-svg-icons";

import { faUsersViewfinder } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  const linkStyling = "hover:text-active-pink flex items-center gap-4 py-4";
  const activeStyling = "text-active-pink border-r-2 border-active-pink ";

  return (
    <div className="pl-8 py-8 flex flex-col w-64 justify-between bg-pink">
      <div>
        <img className="w-12 mb-16" src="/images/favicon.png" />

        <div className="flex flex-col justify-end text-lg">
          <NavLink
            className={({ isActive }) =>
              `${linkStyling} ${isActive ? activeStyling : ""}`
            }
            to="."
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
            end
          >
            <FontAwesomeIcon icon={faUser} />
            profile
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${linkStyling} ${isActive ? activeStyling : ""}`
            }
            to="add-friend"
            end
          >
            <FontAwesomeIcon icon={faSquarePlus} />
            add friend
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${linkStyling} ${isActive ? activeStyling : ""}`
            }
            to="create-group"
            end
          >
            <FontAwesomeIcon icon={faUsersViewfinder} />
            create group
          </NavLink>
        </div>
      </div>

      <User />
    </div>
  );
}
