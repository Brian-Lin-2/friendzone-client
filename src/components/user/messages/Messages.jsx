import FriendList from "./friends-list/FriendList";
import CurrentTexts from "./current-texts/CurrentTexts";
import { useState } from "react";
import useUser from "../../../functions/user";

export default function Messages() {
  const { user } = useUser();
  const [selectedFriend, setSelectedFriend] = useState(user?.friends[0] || []);

  return (
    <div className="flex flex-grow">
      {/* Depending on the selected friend, the current texts will change. */}
      <FriendList
        selectedFriend={selectedFriend}
        setSelectedFriend={setSelectedFriend}
      />
      <CurrentTexts selectedFriend={selectedFriend} />
    </div>
  );
}
