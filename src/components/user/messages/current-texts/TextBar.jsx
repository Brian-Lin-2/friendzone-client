import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { token, socket } from "../../../../functions/utils";
import { bot_response, convert_text } from "../../../../functions/bot";
import useUser from "../../../../functions/user";

export default function TextBar({
  friend_id,
  texts,
  setTexts,
  setIsTexting,
  isBot,
}) {
  // This is only for texting with the bot
  const [disabled, setDisabled] = useState(false);
  const { user } = useUser();

  // Automatically focuses the text.
  const textFocus = useRef(null);

  useEffect(() => {
    if (!disabled && textFocus.current) {
      textFocus.current.focus();
    }
  }, [disabled]);

  async function send_message(e) {
    e.preventDefault();

    let text = e.target.message.value;

    // Messaging is slightly different with a bot.
    if (isBot) {
      text = convert_text(text);
    }

    const res = await fetch(
      `https://www.friendzone-server.online/message/${friend_id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          text,
        }),
      }
    );

    const data = await res.json();
    const message = data.sent_message;

    socket.emit("send message", { user_id: user._id, friend_id, message });

    // Edge case for bot messaging.
    if (isBot) {
      bot_response(
        user._id,
        e.target.message.value,
        [...texts, message],
        setTexts,
        setIsTexting,
        setDisabled
      );
    }

    setTexts([...texts, message]);
    e.target.message.value = "";
  }

  // We will store a reference of the old timeout.
  const typingTimeoutRef = useRef(null);

  useEffect(() => {
    function stop_typing(user_id) {
      if (user_id === friend_id) {
        setIsTexting(false);

        // Clear the previous timeout if it exists
        if (typingTimeoutRef.current) {
          clearTimeout(typingTimeoutRef.current);
        }
      }
    }

    function start_typing(user_id) {
      if (user_id === friend_id) {
        setIsTexting(true);

        // Clear the previous timeout if it exists
        if (typingTimeoutRef.current) {
          clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
          setIsTexting(false);
        }, 1000);
      }
    }

    socket.on("stop typing", stop_typing);
    socket.on("typing", start_typing);

    // Clean up the event listeners on unmount
    return () => {
      socket.off("stop typing", stop_typing);
      socket.off("typing", start_typing);
    };
  }, [friend_id]);

  return (
    <form
      className="ml-8 my-4 flex items-center"
      onSubmit={(e) => send_message(e)}
    >
      <input
        className="pl-4 py-3 pr-16 flex-grow focus:outline-none rounded-lg text-font-gray disabled:bg-light-gray"
        type="text"
        name="message"
        placeholder="send message"
        onChange={() => socket.emit("typing", { user_id: user._id, friend_id })}
        disabled={disabled}
        autoFocus
        ref={textFocus}
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
