import { Link } from "react-router-dom";
import { handleGuest } from "../../functions/auth";
import { isLoggedIn } from "../../functions/utils";

export default function Home() {
  // We skip home screen if user is already logged in.
  isLoggedIn();

  return (
    <div className="flex flex-col gap-4 md:flex-row justify-center md:justify-evenly items-center min-h-lvh bg-light-pink">
      <div>
        <h1 className="text-5xl text-center md:text-left md:text-8xl font-bold">
          friendzone.
        </h1>
        <p className="text-center md:text-left md:text-xl md:ml-2 text-font-gray">
          let&apos;s just be friends
        </p>
      </div>
      <nav className="flex flex-col items-center gap-2 md:gap-4">
        <Link
          to="login"
          className="text-sm md:text-lg border-2 border-black text-white bg-black py-2 md:py-2.5 font-bold rounded w-32 md:w-52 text-center hover:bg-active-pink hover:border-active-pink hover:text-black"
        >
          login
        </Link>
        <Link
          to="signup"
          className="text-sm md:text-lg border-2 border-font-gray py-2 md:py-2.5 font-bold text-font-gray rounded w-32 md:w-52 text-center hover:border-active-pink hover:text-active-pink"
        >
          sign up
        </Link>

        <button
          className="text-sm md:text-base underline font-bold text-font-gray rounded w-32 md:w-52 text-center hover:text-active-pink"
          onClick={handleGuest}
        >
          guest login
        </button>
      </nav>
    </div>
  );
}
