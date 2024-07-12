import { Link } from "react-router-dom";
import { isLoggedIn } from "../../functions/utils";

export default function Home() {
  // We skip home screen if user is already logged in.
  isLoggedIn();

  return (
    <div className="flex justify-evenly items-center min-h-lvh bg-light-pink">
      <div>
        <h1 className="text-8xl font-bold">friendzone.</h1>
        <p className="text-xl ml-2 text-font-gray">
          let&apos;s just be friends
        </p>
      </div>
      <nav className="flex flex-col items-center gap-4">
        <Link
          to="login"
          className="border-2 border-black text-white bg-black py-2.5 font-bold rounded w-52 text-center hover:bg-active-pink hover:border-active-pink hover:text-black"
        >
          login
        </Link>
        <Link
          to="signup"
          className="border-2 border-font-gray py-2.5 font-bold text-font-gray rounded w-52 text-center hover:border-active-pink hover:text-active-pink"
        >
          sign up
        </Link>
      </nav>
    </div>
  );
}
