import { token } from "../../../functions/utils";
import { useState } from "react";

export default function AddFriend() {
  const [result, setResult] = useState(null);

  async function sendRequest(e) {
    e.preventDefault();

    const user = JSON.stringify({
      name: e.target.username.value,
    });

    const res = await fetch("http://localhost:3000/user/friend-request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: user,
    });

    const body = await res.json();

    setResult(body);

    if (res.ok) {
      e.target.username.value = "";
    }
  }

  return (
    <div className="flex flex-col flex-grow bg-light-pink items-center gap-8">
      <img className="w-[500px] mt-12" src="/images/friends.png" />
      <div>
        <form className="flex items-center" onSubmit={(e) => sendRequest(e)}>
          <input
            className="border-2 px-6 py-3 rounded-l-lg border-font-gray text-font-gray placeholder-font-gray w-72 focus:outline-none"
            type="text"
            name="username"
            placeholder="enter username"
          />
          <button className="px-4 py-3 border-2 border-black bg-black text-white rounded-r-lg">
            send request
          </button>
        </form>
        <p
          className={`ml-6 mt-1 ${
            result?.status === "success" ? "text-green-500" : "text-red-500"
          }`}
        >
          {result?.message}
        </p>
      </div>
    </div>
  );
}
