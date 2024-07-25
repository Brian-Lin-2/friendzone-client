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

      {/* TODO: Unopened messages */}
      {/* <span className="bg-red-400 rounded px-2 py-0.5 text-xs">1</span> */}
    </button>
  );
}
