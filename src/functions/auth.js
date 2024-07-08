export async function createUser(user) {
  await fetch("http://127.0.0.1:3000/user/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  // After user signs up, automatically log them in.
  login(user);
}

export async function login(user) {
  const res = await fetch("http://127.0.0.1:3000/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  const data = await res.json();

  // Store the token for authentication.
  sessionStorage.setItem("token", data.token);

  // Redirect to message page and change headers accordingly.
  window.location.href = "http://localhost:5173/user";
}
