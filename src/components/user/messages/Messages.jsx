import FriendList from "./friends-list/FriendList";
import CurrentTexts from "./current-texts/CurrentTexts";

export default function Messages() {
  return (
    <div className="flex flex-grow">
      {/* Depending on the selected friend, the current texts will change. */}
      <FriendList />
      <CurrentTexts />
    </div>
  );
}
