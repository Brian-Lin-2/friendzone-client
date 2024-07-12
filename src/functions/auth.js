async function createUser(user) {
  const res = await fetch("http://127.0.0.1:3000/user/signup", {
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

function populateErrors(errors, err) {
  errors.forEach((e) => {
    err[e.path] = "border-2 border-red-400";
    err[`${e.path}_msg`] = e.msg;
  });
}

async function login(user) {
  const res = await fetch("http://127.0.0.1:3000/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  const data = await res.json();

  if (res.ok) {
    // We can add more later.
    sessionStorage.setItem("user", JSON.stringify(data.user));
    // Store a token for authentication.
    sessionStorage.setItem("token", data.token);

    // Redirect to message page and change headers accordingly.
    window.location.href = "http://localhost:5173/user";

    // Indicates no error.
    return null;
  } else {
    // Edge case for when user is not in the system.
    const user_error = {
      errors: [
        {
          path: "username",
          msg: "User is not in the system.",
        },
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

export function logout() {
  sessionStorage.clear();
  window.location.href = "http://localhost:5173";
}
