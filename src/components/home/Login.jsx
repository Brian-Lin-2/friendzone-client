import { useState } from "react";
import { Link } from "react-router-dom";
import { attemptLogin } from "../../functions/auth";
import { isLoggedIn } from "../../functions/utils";

export default function Login() {
  // Edge case for logged in user.
  isLoggedIn();

  const [errors, setErrors] = useState(null);

  return (
    <div className="bg-light-pink min-h-lvh flex items-center justify-center">
      <div className="bg-transparent-white px-12 pt-8 pb-20 rounded-xl w-[28em]">
        <Link to="/">
          <img className="w-12" src="/images/back-arrow.png" />
        </Link>
        <h2 className="text-4xl font-bold text-center mt-4 mb-8">login</h2>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => attemptLogin(e, setErrors)}
        >
          <input
            className={`px-6 py-3 bg-white text-dark-gray placeholder-dark-gray rounded ${errors?.username}`}
            type="text"
            name="username"
            placeholder="username"
          />
          {errors?.username_msg && (
            <span className="text-sm -mt-3 text-red-400">
              {errors.username_msg}
            </span>
          )}
          <input
            className={`px-6 py-3 bg-white text-dark-gray placeholder-dark-gray rounded ${errors?.password}`}
            type="password"
            name="password"
            placeholder="password"
          />
          {errors?.password_msg && (
            <span className="text-sm -mt-3 text-red-400">
              {errors.password_msg}
            </span>
          )}
          <button className="font-bold mt-4 bg-dark-gray py-3 rounded text-white">
            login
          </button>
        </form>
      </div>
    </div>
  );
}
