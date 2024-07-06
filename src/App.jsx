import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Signup from "./components/home/Signup";
import Login from "./components/home/Login";
import User from "./components/user/User";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="user" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
