import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Signup from "./components/home/Signup";
import Login from "./components/home/Login";
import UserPage from "./components/user/UserPage";
import Messages from "./components/user/Messages";
import Profile from "./components/user/Profile";
import AddFriend from "./components/user/AddFriend";
import CreateGroup from "./components/user/CreateGroup";

export default function App() {
  return (
    <div className="font-poppins">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="user" element={<UserPage />}>
              <Route index element={<Messages />} />
              <Route path="profile" element={<Profile />} />
              <Route path="add-friend" element={<AddFriend />} />
              <Route path="create-group" element={<CreateGroup />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
