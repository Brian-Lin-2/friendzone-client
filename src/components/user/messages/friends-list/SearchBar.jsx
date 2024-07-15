import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { user } from "../../../../functions/utils";

export default function SearchBar({ setFriends }) {
  function filterFriends(e) {
    e.preventDefault();
    const name = e.target.value;
    const filtered_friends = user.friends.filter((friend) =>
      friend.full_name.startsWith(name)
    );
    setFriends(filtered_friends);
  }

  // Dummy search for now.
  return (
    <form className="border border-font-gray rounded flex items-center gap-2 px-2 py-1">
      <FontAwesomeIcon className="text-font-gray" icon={faMagnifyingGlass} />
      <input
        className="focus:outline-none bg-transparent"
        type="text"
        name="friend_search"
        placeholder="search"
        onChange={filterFriends}
      />
    </form>
  );
}
