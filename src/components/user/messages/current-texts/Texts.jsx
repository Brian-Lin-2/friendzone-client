import Text from "./Text";
import { useEffect, useRef } from "react";
import { token, socket } from "../../../../functions/utils";
import useUser from "../../../../functions/user";
import Loading from "../../../misc/Loading";

export default function Texts({
  friend_id,
  texts,
  setTexts,
  isTexting,
  mobileMessages,
}) {
  const { user } = useUser();

  useEffect(() => {
    // Edge case. No friends.
    if (!friend_id) {
      return;
    }

    async function getMessages() {
      const res = await fetch(
        `http://127.0.0.1:3000/message/all/${friend_id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();

      setTexts(data.history);
    }

    getMessages();
  }, [friend_id, setTexts]);

  // Realtime chat.
  socket.on("chat message", (text) => {
    setTexts([...texts, text]);
  });

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [texts, isTexting, mobileMessages]);

  if (texts.length === 0) {
    return <Loading />;
  }

  return (
    <ul
      ref={messagesEndRef}
      className="flex-grow pl-12 gap-2 pr-10 overflow-y-scroll relative"
    >
      <div className="flex flex-col absolute gap-2 inset-0 p-4 mx-4">
        {texts.map((e) => {
          return (
            <Text key={e._id} user={e.from === user._id} message={e.text} />
          );
        })}
        {isTexting && (
          <span className="px-4 py-2 animate-pulse rounded-lg bg-dark-pink text-sm md:text-base self-start text-font-gray">
            . . .
          </span>
        )}
      </div>
    </ul>
  );
}
