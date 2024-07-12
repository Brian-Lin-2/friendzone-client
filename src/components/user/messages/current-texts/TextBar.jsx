import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

export default function TextBar() {
  return (
    <form className="ml-8 my-4 flex items-center">
      <input
        className="pl-4 py-3 pr-16 flex-grow focus:outline-none rounded-lg text-font-gray"
        type="text"
        name="message"
        placeholder="send message"
      />
      <button>
        <FontAwesomeIcon
          className="h-10 relative right-10 mt-0.5"
          icon={faSquareArrowUpRight}
        />
      </button>
    </form>
  );
}
