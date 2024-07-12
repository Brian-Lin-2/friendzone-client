/* eslint-disable react/prop-types */
export default function Text({ user, message }) {
  return (
    <span
      className={`px-4 py-2 rounded-lg bg-dark-pink text-font-gray ${
        user ? "self-end" : "self-start"
      }`}
    >
      {message}
    </span>
  );
}
