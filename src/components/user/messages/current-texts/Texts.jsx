import Text from "./Text";
import { useState, useEffect, useRef } from "react";
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
  const [loading, setLoading] = useState(true);
  const { user } = useUser();

  useEffect(() => {
    // Edge case. No friends.
    if (!friend_id) {
      setLoading(false);
      return;
    }

    setLoading(true);

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
      setLoading(false);
    }

    getMessages();
  }, [friend_id, setTexts]);

  useEffect(() => {
    function chat_message(user_id, text) {
      if (user_id === friend_id) {
        setTexts([...texts, text]);
      }
    }

    // Realtime chat.
    socket.on("chat message", chat_message);

    // On unmount.
    return () => socket.off("chat message", chat_message);
  }, [friend_id, texts, setTexts]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [texts, isTexting, mobileMessages]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div
      ref={messagesEndRef}
      className="overflow-y-scroll flex-grow flex flex-col justify-end max-w-[875px]"
    >
      <ul className="flex flex-col gap-2 pt-4 px-8 max-h-[75vh] md:max-h-[550px]">
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
      </ul>
    </div>
  );
}
