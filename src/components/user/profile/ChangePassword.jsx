import { token } from "../../../functions/utils";
import { populateErrors } from "../../../functions/auth";
import { useState } from "react";

export default function ChangePassword({ setChangePassword }) {
  const [errors, setErrors] = useState(null);
  const [success, setSuccess] = useState(null);

  async function handleUpdate(e) {
    e.preventDefault();

    const password_change = JSON.stringify({
      password: e.target.password.value,
      new_password: e.target.new_password.value,
      confirm_password: e.target.confirm_password.value,
    });

    const res = await fetch(`http://127.0.0.1:3000/user/change-password`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: password_change,
    });

    const data = await res.json();

    if (!res.ok) {
      const errors = {};
      populateErrors(data.errors.errors, errors);
      setErrors(errors);
    } else {
      setSuccess(data.message);
    }
  }

  return (
    <div className="flex flex-col items-center bg-transparent-white p-12 rounded-lg w-1/3">
      <h1 className="text-2xl text-font-gray mb-6">Change Password</h1>
      <form className="flex flex-col gap-5 w-full" onSubmit={handleUpdate}>
        <input
          className={`px-4 py-2 rounded placeholder:text-font-gray text-font-gray ${errors?.password}`}
          type="password"
          name="password"
          placeholder="old password"
        />
        {errors?.password && (
          <span className="text-sm -mt-5 -mb-2 text-red-400">
            {errors.password_msg}
          </span>
        )}

        <input
          className={`px-4 py-2 rounded placeholder:text-font-gray text-font-gray ${errors?.new_password}`}
          type="password"
          name="new_password"
          placeholder="new password"
        />
        {errors?.new_password && (
          <span className="text-sm -mt-5 -mb-2 text-red-400">
            {errors.new_password_msg}
          </span>
        )}

        <input
          className={`px-4 py-2 rounded placeholder:text-font-gray text-font-gray ${errors?.confirm_password}`}
          type="password"
          name="confirm_password"
          placeholder="confirm new password"
        />
        {errors?.confirm_password && (
          <span className="text-sm -mt-5 -mb-2 text-red-400">
            {errors.confirm_password_msg}
          </span>
        )}

        <button className="border-2 rounded-lg bg-black text-white p-2">
          change password
        </button>

        {success && (
          <p className="text-center -mt-4 text-green-500">{success}</p>
        )}
      </form>
      <button
        className="mt-2 text-sm underline text-font-gray"
        onClick={() => setChangePassword(false)}
      >
        edit profile
      </button>
    </div>
  );
}