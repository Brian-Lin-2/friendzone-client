export function isLoggedIn() {
  if (sessionStorage.getItem("token")) {
    // We want to always redirect to the user page.
    window.location.href = "http://localhost:5173/user";
  }
}

export function authenticate() {
  // Checks to see if there's a user.
  if (!sessionStorage.getItem("token")) {
    window.location.href = "http://localhost:5173/login";
  }
}

const token = sessionStorage.getItem("token");

export { token };
