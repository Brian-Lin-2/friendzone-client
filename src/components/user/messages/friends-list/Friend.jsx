/* eslint-disable react/prop-types */
export default function Friend({ id, selected, name, setSelectedFriend }) {
  return (
    <button
      className={`flex justify-between items-center p-4 rounded-lg ${
        selected ? "bg-pink" : ""
      }`}
      onClick={() => setSelectedFriend(id)}
    >
      <div className="flex items-center gap-3">
        <img
          className="w-10 bg-white rounded-full"
          src="/images/pfp.png"
          alt="pfp"
        />
        <h3 className="capitalize">{name}</h3>
      </div>

      <span className="bg-red-400 rounded px-2 py-0.5 text-xs">1</span>
    </button>
  );
}
