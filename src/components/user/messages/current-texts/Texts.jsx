import Text from "./Text";
import { useState, useEffect } from "react";
import { user, token } from "../../../../functions/utils";

export default function Texts({ friend_id }) {
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    async function getMessages() {
      const req = await fetch(
        `http://127.0.0.1:3000/message/all/${friend_id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await req.json();

      setTexts(data.history);
    }

    getMessages();
  }, [friend_id]);

  return (
    <li className="flex flex-col flex-grow justify-end items-stenart pl-8 pr-10 gap-2">
      {texts.map((e) => {
        return <Text key={e._id} user={e.from === user._id} message={e.text} />;
      })}
    </li>
  );
}
