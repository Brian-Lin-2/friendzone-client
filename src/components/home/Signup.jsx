import { useState } from "react";
import { Link } from "react-router-dom";
import { attemptSignup } from "../../functions/auth";

export default function Signup() {
  const [errors, setErrors] = useState(null);

  return (
    <div className="bg-light-pink min-h-lvh flex items-center justify-center">
      <div className="bg-transparent-white px-12 pt-8 pb-20 rounded-xl w-[28em]">
        <Link to="/">
          <img className="w-12" src="/images/back-arrow.png" />
        </Link>
        <h2 className="text-4xl font-bold text-center mt-4 mb-8">sign up</h2>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => attemptSignup(e, setErrors)}
        >
          <input
            className={`px-4 py-3 bg-white text-dark-gray placeholder-dark-gray rounded ${errors?.username}`}
            type="text"
            name="username"
            placeholder="username"
          />
          {errors?.username_msg && (
            <span className="text-sm -mt-3 text-red-500">
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
            <span className="text-sm -mt-3 text-red-500">
              {errors.password_msg}
            </span>
          )}
          <input
            className={`px-6 py-3 bg-white text-dark-gray placeholder-dark-gray rounded ${errors?.first_name}`}
            type="text"
            name="first_name"
            placeholder="first name"
          />
          {errors?.first_name_msg && (
            <span className="text-sm -mt-3 text-red-500">
              {errors.first_name_msg}
            </span>
          )}
          <input
            className={`px-6 py-3 bg-white text-dark-gray placeholder-dark-gray rounded ${errors?.last_name}`}
            type="text"
            name="last_name"
            placeholder="last name"
          />
          {errors?.last_name_msg && (
            <span className="text-sm -mt-3 text-red-500">
              {errors.last_name_msg}
            </span>
          )}
          <button className="font-bold mt-4 bg-dark-gray py-3 rounded text-white">
            sign up
          </button>
        </form>
      </div>
    </div>
  );
}
