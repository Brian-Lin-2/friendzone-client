import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Signup from "./components/home/Signup";
import Login from "./components/home/Login";
import UserPage from "./components/user/UserPage";
import Messages from "./components/user/messages/Messages";
import ProfileInfo from "./components/user/profile/ProfileInfo";
import AddFriend from "./components/user/add-friend/AddFriend";
import CreateGroup from "./components/user/create-group/CreateGroup";

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
              <Route path="profile" element={<ProfileInfo />} />
              <Route path="add-friend" element={<AddFriend />} />
              <Route path="create-group" element={<CreateGroup />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
