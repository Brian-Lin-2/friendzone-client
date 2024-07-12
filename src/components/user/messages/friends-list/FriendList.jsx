import SearchBar from "./SearchBar";
import Friend from "./Friend";

export default function FriendList() {
  return (
    <div className="w-80 bg-light-pink border-r border-dark-gray">
      <h1 className="text-2xl m-4 mt-8 text-font-gray">Messages</h1>
      <div className="m-4 mb-6">
        <SearchBar />
      </div>
      <div className="flex flex-col mx-2">
        <Friend selected={true} />
        <Friend />
        <Friend />
      </div>
    </div>
  );
}
