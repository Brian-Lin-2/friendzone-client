import ChangePassword from "./ChangePassword";
import { token } from "../../../functions/utils";
import useUser from "../../../functions/user";
import { useState } from "react";

export default function ProfileInfo() {
  const { user, setUser } = useUser();
  const [profile, setProfile] = useState(user);
  const [changePassword, setChangePassword] = useState(false);
  const [status, setStatus] = useState(false);

  function changeProfile(e, change) {
    setProfile({ ...profile, [change]: e.target.value });
  }

  async function handleUpdate(e) {
    e.preventDefault();

    const new_profile = JSON.stringify({
      username: e.target.username.value,
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
    });

    const res = await fetch(`https://www.friendzone-server.online/user`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: new_profile,
    });

    const data = await res.json();

    setUser(data.user);
    setStatus(data.message);
  }

  return (
    <div className="flex-grow bg-light-pink flex items-center justify-center">
      {!changePassword && (
        <div className="flex flex-col items-center bg-transparent-white p-12 rounded-lg md:w-[400px]">
          <h1 className="text-2xl text-font-gray mb-6">Edit Profile</h1>
          <form
            className="flex flex-col gap-3 md:gap-4 w-full"
            onSubmit={handleUpdate}
          >
            <label
              className="-mb-3 md:-mb-4 text-sm md:text-base text-font-gray"
              htmlFor="username"
            >
              username:
            </label>
            <input
              className="px-4 py-2 rounded text-sm md:text-base placeholder:text-font-gray text-font-gray"
              type="text"
              id="username"
              name="username"
              value={`${profile.username}`}
              onChange={(e) => changeProfile(e, "username")}
            />

            <label
              className="-mb-3 md:-mb-4 text-sm md:text-base text-font-gray"
              htmlFor="first_name"
            >
              first name:
            </label>
            <input
              className="px-4 py-2 rounded text-sm md:text-base placeholder:text-font-gray text-font-gray"
              type="text"
              id="first_name"
              name="first_name"
              value={`${profile.first_name}`}
              onChange={(e) => changeProfile(e, "first_name")}
            />

            <label
              className="-mb-3 md:-mb-4 text-sm md:text-base text-font-gray"
              htmlFor="last_name"
            >
              last name:
            </label>
            <input
              className="px-4 py-2 rounded text-sm md:text-base placeholder:text-font-gray text-font-gray"
              type="text"
              id="last_name"
              name="last_name"
              value={`${profile.last_name}`}
              onChange={(e) => changeProfile(e, "username")}
            />

            <button className="border-2 rounded-lg text-sm md:text-base bg-black text-white p-2">
              save changes
            </button>
            {status && (
              <p className="text-center -mt-4 text-green-500">{status}</p>
            )}
          </form>
          <button
            className="mt-2 text-sm md:text-base underline text-font-gray"
            onClick={() => setChangePassword(true)}
          >
            change password
          </button>
        </div>
      )}

      {changePassword && (
        <ChangePassword setChangePassword={setChangePassword} />
      )}
    </div>
  );
}
