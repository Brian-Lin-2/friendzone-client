import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { token, socket } from "../../../../functions/utils";

export default function TextBar({ friend_id, texts, setTexts, setIsTexting }) {
  async function send_message(e) {
    e.preventDefault();

    const text = e.target.message.value;

    const res = await fetch(`http://127.0.0.1:3000/message/${friend_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        text,
      }),
    });

    const data = await res.json();
    const message = data.sent_message;

    socket.emit("send message", { friend_id, message });

    setTexts([...texts, message]);

    e.target.message.value = "";
  }

  // We will store a reference of the old timeout.
  const typingTimeoutRef = useRef(null);

  socket.on("stop typing", () => {
    setIsTexting(false);

    // Clear the previous timeout if it exists
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
  });

  socket.on("typing", () => {
    setIsTexting(true);

    // Clear the previous timeout if it exists
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      setIsTexting(false);
    }, 2000);
  });

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
        onChange={() => socket.emit("typing", { friend_id })}
        autoFocus
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
