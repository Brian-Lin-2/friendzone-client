import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { logout } from "../../functions/auth";

export default function User() {
  // For now we only stored the user's first name.
  const first_name = sessionStorage.getItem("user");

  return (
    <div className="flex justify-between items-center mr-8">
      <div className="flex gap-3 items-center">
        <img
          className="w-8 border bg-white rounded-full p-2 border-black"
          src="/images/pfp.png"
          alt="pfp"
        />
        <span className="capitalize">{first_name}</span>
      </div>
      <FontAwesomeIcon
        className="h-6 text-red-400 rotate-180 cursor-pointer hover:text-red-500"
        icon={faRightFromBracket}
        onClick={logout}
      />
    </div>
  );
}
