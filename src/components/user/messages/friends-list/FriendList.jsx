import SearchBar from "./SearchBar";
import Friend from "./Friend";
import { useState } from "react";
import { user } from "../../../../functions/utils";

export default function FriendList() {
  // Selected friend will default be first friend.
  const [selectedFriend] = useState(0);

  return (
    <div className="w-80 bg-light-pink border-r border-dark-gray">
      <h1 className="text-2xl m-4 mt-8 text-font-gray">Messages</h1>
      <div className="m-4 mb-6">
        <SearchBar />
      </div>
      <div className="flex flex-col mx-2">
        {user.friends.map((friend, index) => {
          return (
            <Friend
              key={friend._id}
              name={friend.full_name}
              selected={selectedFriend === index}
            />
          );
        })}
      </div>
    </div>
  );
}
