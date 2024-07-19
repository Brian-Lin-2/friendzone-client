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
      <div className="bg-transparent-white px-8 pt-6 pb-16 md:px-12 md:pt-8 md:pb-20 rounded-xl md:w-[28em] mx-8 md:mx-0">
        <Link to="/">
          <img className="w-8 md:w-12" src="/images/back-arrow.png" />
        </Link>
        <h2 className="text-2xl md:text-4xl font-bold text-center mt-4 mb-6 md:mb-8">
          login
        </h2>
        <form
          className="flex flex-col gap-3 md:gap-4"
          onSubmit={(e) => attemptLogin(e, setErrors)}
        >
          <input
            className={`px-4 md:px-6 py-2 md:py-3 bg-white text-font-gray placeholder-font-gray text-sm md:text-lg rounded ${errors?.username}`}
            type="text"
            name="username"
            placeholder="username"
            autoFocus
          />
          {errors?.username_msg && (
            <span className="text-xs md:text-sm -mt-2 md:-mt-3 text-red-400">
              {errors.username_msg}
            </span>
          )}
          <input
            className={`px-4 md:px-6 py-2 md:py-3 bg-white text-font-gray placeholder-font-gray text-sm md:text-lg rounded ${errors?.password}`}
            type="password"
            name="password"
            placeholder="password"
          />
          {errors?.password_msg && (
            <span className="text-xs md:text-sm -mt-2 md:-mt-3 text-red-400">
              {errors.password_msg}
            </span>
          )}
          <button className="text-sm md:text-lg font-bold mt-2 md:mt-4 bg-font-gray py-2 md:py-3 rounded text-white hover:bg-active-pink hover:border-active-pink hover:text-black">
            login
          </button>
        </form>
      </div>
    </div>
  );
}
