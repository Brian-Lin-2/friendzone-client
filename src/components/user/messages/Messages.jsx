import FriendList from "./friends-list/FriendList";
import CurrentTexts from "./current-texts/CurrentTexts";
import { useState } from "react";
import useUser from "../../../functions/user";

export default function Messages() {
  const { user } = useUser();
  const [selectedFriend, setSelectedFriend] = useState(user?.friends[0] || []);
  const [mobileMessages, setMobileMessages] = useState(false);

  return (
    <div className="flex flex-grow">
      {/* Depending on the selected friend, the current texts will change. */}
      <FriendList
        selectedFriend={selectedFriend}
        setSelectedFriend={setSelectedFriend}
        mobileMessages={mobileMessages}
        setMobileMessages={setMobileMessages}
      />
      <CurrentTexts
        selectedFriend={selectedFriend}
        mobileMessages={mobileMessages}
        setMobileMessages={setMobileMessages}
      />
    </div>
  );
}
