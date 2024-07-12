import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { logout } from "../../functions/auth";
import Profile from "./Profile";

export default function User() {
  // For now we only stored the user's first name.
  const first_name = sessionStorage.getItem("user");

  return (
    <div className="flex justify-between items-center mr-8">
      <Profile name={first_name} />
      <FontAwesomeIcon
        className="h-6 text-red-400 rotate-180 cursor-pointer hover:text-red-500"
        icon={faRightFromBracket}
        onClick={logout}
      />
    </div>
  );
}
