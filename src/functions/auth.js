import { disconnectSocket } from "./utils";

export async function handleGuest() {
  // Default values for guest user.
  const random_name = Math.round(Math.random() * 100000000);
  const random_pw = Math.round(Math.random() * 100000000);

  const guest = {
    username: `guest${random_name}`,
    password: random_pw,
    confirm_password: random_pw,
    first_name: "guest",
    last_name: "account",
  };

  localStorage.setItem("guest", true);
  createUser(guest);
}

async function createUser(user) {
  const res = await fetch("http://www.friendzone-server.online/user/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  const data = await res.json();

  if (res.ok) {
    // After user signs up, automatically log them in.
    // This should never error, so it'll return null.
    return login(user);
  } else {
    return data.errors;
  }
}

export function populateErrors(errors, err) {
  errors.forEach((e) => {
    err[e.path] = "border-2 border-red-400";
    err[`${e.path}_msg`] = e.msg;
  });
}

async function login(user) {
  const res = await fetch("http://www.friendzone-server.online/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  const data = await res.json();

  if (res.ok) {
    // Store a token for authentication.
    localStorage.setItem("token", data.token);

    // Automatically redirect.
    window.location.href = "https://friendzone-client.vercel.app/user";

    // Indicates no error.
    return null;
  } else {
    // Edge case for if no error was provided.
    const user_error = {
      errors: [
        { msg: "An error has occured.", path: "username" },
        { msg: "An error has occured.", path: "password" },
      ],
    };

    return data.errors || user_error;
  }
}

export async function attemptSignup(e, setErrors) {
  e.preventDefault();

  const user = {
    username: e.target.username.value,
    password: e.target.password.value,
    confirm_password: e.target.confirm_password.value,
    first_name: e.target.first_name.value,
    last_name: e.target.last_name.value,
  };

  const err = await createUser(user);

  if (err) {
    const errors = {};
    populateErrors(err.errors, errors);
    setErrors(errors);
  }
}

export async function attemptLogin(e, setErrors) {
  e.preventDefault();

  const user = {
    username: e.target.username.value,
    password: e.target.password.value,
  };

  const err = await login(user);

  if (err) {
    const errors = {};
    populateErrors(err.errors, errors);
    setErrors(errors);
  }
}

export async function logout() {
  disconnectSocket();
  localStorage.clear();
  window.location.href = "https://friendzone-client.vercel.app";
}
