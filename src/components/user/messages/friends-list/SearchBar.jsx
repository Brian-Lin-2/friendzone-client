import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  // Dummy search for now.
  return (
    <form className="border border-font-gray rounded flex items-center gap-2 px-2 py-1">
      <FontAwesomeIcon className="text-font-gray" icon={faMagnifyingGlass} />
      <input
        className="focus:outline-none bg-transparent"
        type="text"
        name="friend_search"
        placeholder="search"
      />
    </form>
  );
}
