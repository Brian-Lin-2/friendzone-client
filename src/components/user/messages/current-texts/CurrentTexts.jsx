import Profile from "../../Profile";
import Texts from "./Texts";
import TextBar from "./TextBar";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

export default function CurrentTexts({
  selectedFriend,
  mobileMessages,
  setMobileMessages,
}) {
  const [texts, setTexts] = useState([]);
  const [isTexting, setIsTexting] = useState(false);

  return (
    <div
      className={`md:flex flex-col flex-grow ${
        mobileMessages ? "flex" : "hidden"
      }`}
    >
      <div className="h-[86px] md:h-20 bg-light-pink flex items-center pl-6">
        <button className="md:hidden" onClick={() => setMobileMessages(false)}>
          <FontAwesomeIcon className="h-6 mr-4 mt-1" icon={faLeftLong} />
        </button>
        <Profile name={selectedFriend.full_name} />
      </div>

      <div className="flex-grow bg-transparent-pink flex flex-col justify-between">
        <Texts
          friend_id={selectedFriend._id}
          texts={texts}
          setTexts={setTexts}
          isTexting={isTexting}
          mobileMessages={mobileMessages}
        />
        <TextBar
          friend_id={selectedFriend._id}
          texts={texts}
          setTexts={setTexts}
          isTexting={isTexting}
          setIsTexting={setIsTexting}
        />
      </div>
    </div>
  );
}
