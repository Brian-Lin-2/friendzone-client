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
      <div className="flex items-center gap-3">
        <img
          className="w-10 bg-white p-2 rounded-full"
          src="/images/pfp.png"
          alt="pfp"
        />
        <h3 className="capitalize">{friend.full_name}</h3>
      </div>

      {/* TODO: Unopened messages */}
      {/* <span className="bg-red-400 rounded px-2 py-0.5 text-xs">1</span> */}
    </button>
  );
}
