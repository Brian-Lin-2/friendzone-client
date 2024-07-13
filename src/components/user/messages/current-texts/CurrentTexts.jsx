import Profile from "../../Profile";
import Texts from "./Texts";
import TextBar from "./TextBar";

export default function CurrentTexts({ selectedFriend }) {
  return (
    <div className="flex flex-col flex-grow">
      <div className="h-20 bg-light-pink flex pl-6">
        <Profile name={selectedFriend.full_name} />
      </div>

      <div className="flex-grow bg-transparent-pink flex flex-col justify-between">
        <Texts friend_id={selectedFriend._id} />
        <TextBar />
      </div>
    </div>
  );
}
