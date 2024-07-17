export default function Profile({ name }) {
  return (
    <div className="flex gap-3 items-center">
      <img
        className="w-10 bg-white rounded-full p-2"
        src="/images/pfp.png"
        alt="pfp"
      />
      <span className="capitalize">{name}</span>
    </div>
  );
}
