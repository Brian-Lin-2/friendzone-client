import { Link } from "react-router-dom";
import { createUser } from "../../functions/auth";

export default function Signup() {
  return (
    <div className="bg-light-pink min-h-lvh flex items-center justify-center">
      <div className="bg-transparent-white px-12 pt-8 pb-20 rounded-xl w-[28em]">
        <Link to="/">
          <img className="w-12" src="/images/back-arrow.png" />
        </Link>
        <h2 className="text-4xl font-bold text-center mt-4 mb-8">sign up</h2>
        <form className="flex flex-col gap-4" onSubmit={attemptSignup}>
          <input
            className="px-6 py-3 bg-white text-dark-gray placeholder-dark-gray rounded"
            type="text"
            name="username"
            placeholder="username"
          />
          <input
            className="px-6 py-3 bg-white text-dark-gray placeholder-dark-gray rounded"
            type="password"
            name="password"
            placeholder="password"
          />
          <input
            className="px-6 py-3 bg-white text-dark-gray placeholder-dark-gray rounded"
            type="text"
            name="first_name"
            placeholder="first name"
          />
          <input
            className="px-6 py-3 bg-white text-dark-gray placeholder-dark-gray rounded"
            type="text"
            name="last_name"
            placeholder="last name"
          />
          <button className="font-bold mt-4 bg-dark-gray py-3 rounded text-white">
            sign up
          </button>
        </form>
      </div>
    </div>
  );
}

async function attemptSignup(e) {
  e.preventDefault();

  const user = {
    username: e.target.username.value,
    password: e.target.password.value,
    first_name: e.target.first_name.value,
    last_name: e.target.last_name.value,
  };

  const res = await createUser(user);
}
