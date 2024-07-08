import { Link } from "react-router-dom";
import { login } from "../../functions/auth";

export default function Login() {
  return (
    <div className="bg-light-pink min-h-lvh flex items-center justify-center">
      <div className="bg-transparent-white px-12 pt-8 pb-20 rounded-xl w-[28em]">
        <Link to="/">
          <img className="w-12" src="/images/back-arrow.png" />
        </Link>
        <h2 className="text-4xl font-bold text-center mt-4 mb-8">login</h2>
        <form className="flex flex-col gap-4" onSubmit={attemptLogin}>
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
          <button className="font-bold mt-4 bg-dark-gray py-3 rounded text-white">
            login
          </button>
        </form>
      </div>
    </div>
  );
}

async function attemptLogin(e) {
  e.preventDefault();

  const user = {
    username: e.target.username.value,
    password: e.target.password.value,
  };

  const res = await login(user);
}
