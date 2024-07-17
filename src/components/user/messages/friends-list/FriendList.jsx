import SearchBar from "./SearchBar";
import Friend from "./Friend";
import { useState } from "react";
import useUser from "../../../../functions/user";

export default function FriendList({ selectedFriend, setSelectedFriend }) {
  const { user } = useUser();

  // Selected friend will default be first friend.
  const [friends, setFriends] = useState(user.friends);

  return (
    <div className="w-80 bg-light-pink border-r border-dark-gray">
      <h1 className="text-2xl m-4 mt-8 text-font-gray">Messages</h1>
      <div className="m-4 mb-6">
        <SearchBar setFriends={setFriends} />
      </div>
      <div className="flex flex-col mx-2">
        {friends.map((friend) => {
          return (
            <Friend
              key={friend._id}
              friend={friend}
              selected={selectedFriend === friend}
              setSelectedFriend={setSelectedFriend}
            />
          );
        })}
      </div>
    </div>
  );
}
