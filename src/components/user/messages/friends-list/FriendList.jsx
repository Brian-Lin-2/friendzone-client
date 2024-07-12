import SearchBar from "./SearchBar";
import Friend from "./Friend";
import { useState } from "react";
import { user } from "../../../../functions/utils";

export default function FriendList() {
  // Selected friend will default be first friend.
  const [friends, setFriends] = useState(user.friends);
  const [selectedFriend, setSelectedFriend] = useState(user.friends[0]._id);

  return (
    <div className="w-80 bg-light-pink border-r border-dark-gray">
      <h1 className="text-2xl m-4 mt-8 text-font-gray">Messages</h1>
      <div className="m-4 mb-6">
        <SearchBar friends={friends} setFriends={setFriends} />
      </div>
      <div className="flex flex-col mx-2">
        {friends.map((friend) => {
          return (
            <Friend
              key={friend._id}
              id={friend._id}
              name={friend.full_name}
              selected={selectedFriend === friend._id}
              setSelectedFriend={setSelectedFriend}
            />
          );
        })}
      </div>
    </div>
  );
}
