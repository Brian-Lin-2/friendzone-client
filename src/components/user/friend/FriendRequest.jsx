import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function FriendRequest({ friend }) {
  return (
    <div className="flex justify-between items-center w-full py-4 flex-grow">
      <div className="flex items-center gap-3">
        <img
          className="border rounded-full border-font-gray w-12 p-2 bg-white"
          src="/images/pfp.png"
          alt=""
        />
        <h3>{friend.full_name}</h3>
      </div>
      <div className="flex gap-3">
        <button>
          <FontAwesomeIcon
            className="text-green-500 h-6 hover:text-green-400"
            icon={faCheck}
          />
        </button>

        <button>
          <FontAwesomeIcon
            className="text-red-500 h-6 hover:text-red-400"
            icon={faXmark}
          />
        </button>
      </div>
    </div>
  );
}
