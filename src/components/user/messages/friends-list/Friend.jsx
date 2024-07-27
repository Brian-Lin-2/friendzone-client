import Profile from "../../Profile";
import { BOT_NAME } from "../../../../functions/bot";

export default function Friend({
  friend,
  selected,
  setSelectedFriend,
  setMobileMessages,
}) {
  return (
    <button
      className={`flex justify-between items-center p-4 rounded-lg ${
        selected ? "bg-pink" : ""
      }`}
      onClick={() => {
        setSelectedFriend(friend);
        setMobileMessages(true);
      }}
    >
      <Profile name={friend.full_name} isBot={friend.username === BOT_NAME} />
    </button>
  );
}
