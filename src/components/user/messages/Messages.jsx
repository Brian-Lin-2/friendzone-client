import FriendList from "./friends-list/FriendList";
import CurrentTexts from "./current-texts/CurrentTexts";
import { useState } from "react";
import { user } from "../../../functions/utils";

export default function Messages() {
  const [selectedFriend, setSelectedFriend] = useState(user.friends[0]);

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
