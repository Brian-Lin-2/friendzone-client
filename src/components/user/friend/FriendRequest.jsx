import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { token } from "../../../functions/utils";
import useUser from "../../../functions/user";

export default function FriendRequest({ friend }) {
  const { setUser } = useUser();

  async function acceptRequest() {
    const res = await fetch(
      `http://127.0.0.1:3000/user/friend-request/${friend._id}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
    }
  }

  async function rejectRequest() {
    const res = await fetch(
      `http://127.0.0.1:3000/user/friend-request/${friend._id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
    }
  }

  return (
    <div className="flex justify-between items-center w-full py-4 flex-grow">
      <div className="flex items-center gap-3">
        <img
          className="border rounded-full border-font-gray w-10 md:w-12 p-2 bg-white"
          src="/images/pfp.png"
          alt=""
        />
        <h3 className="capitalize">{friend.full_name}</h3>
      </div>
      <div className="flex gap-3">
        <button onClick={acceptRequest}>
          <FontAwesomeIcon
            className="text-green-500 md:h-6 hover:text-green-400"
            icon={faCheck}
          />
        </button>

        <button onClick={rejectRequest}>
          <FontAwesomeIcon
            className="text-red-500 md:h-6 hover:text-red-400"
            icon={faXmark}
          />
        </button>
      </div>
    </div>
  );
}
