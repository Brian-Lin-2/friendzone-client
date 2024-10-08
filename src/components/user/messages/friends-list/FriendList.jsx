import SearchBar from "./SearchBar";
import Friend from "./Friend";
import { useState, useEffect } from "react";
import { getUser } from "../../../../functions/user";

export default function FriendList({
  selectedFriend,
  setSelectedFriend,
  mobileMessages,
  setMobileMessages,
}) {
  // Selected friend will default be first friend.
  const [friends, setFriends] = useState(null);

  useEffect(() => {
    async function getFriends() {
      const user = await getUser();
      setFriends(user.friends);
    }

    getFriends();
  }, []);

  if (!friends) {
    return;
  }

  return (
    <div
      className={`flex-grow md:flex-grow-0 md:block w-80 bg-light-pink border-r border-dark-gray ${
        mobileMessages ? "hidden" : "block"
      }`}
    >
      <h1 className="text-2xl m-4 mt-8 text-font-gray">Messages</h1>
      <div className="m-4 mb-6">
        <SearchBar setFriends={setFriends} />
      </div>
      <div className="flex flex-col mx-2 md:max-h-[550px] md:overflow-y-scroll">
        {friends.map((friend) => {
          return (
            <Friend
              key={friend._id}
              friend={friend}
              selected={selectedFriend.username === friend.username}
              setSelectedFriend={setSelectedFriend}
              setMobileMessages={setMobileMessages}
            />
          );
        })}
      </div>
    </div>
  );
}
