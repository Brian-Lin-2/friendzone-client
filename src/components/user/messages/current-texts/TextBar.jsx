import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { token } from "../../../../functions/utils";

export default function TextBar({ friend_id }) {
  async function send_message(e) {
    e.preventDefault();

    await fetch(`http://127.0.0.1:3000/message/${friend_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        text: e.target.message.value,
      }),
    });

    e.target.message.value = "";
  }

  return (
    <form
      className="ml-8 my-4 flex items-center"
      onSubmit={(e) => send_message(e)}
    >
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
