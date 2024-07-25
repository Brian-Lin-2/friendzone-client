// user parameter determines if the text was from the user or the friend.
export default function Text({ user, message }) {
  return (
    <p
      className={`px-4 py-2 rounded-lg bg-dark-pink text-sm md:text-base text-font-gray max-w-[45%] whitespace-pre-wrap ${
        user ? "self-end" : "self-start"
      }`}
    >
      {message}
    </p>
  );
}
