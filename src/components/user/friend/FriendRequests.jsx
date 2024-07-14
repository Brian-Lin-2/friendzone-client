import FriendRequest from "./FriendRequest";
import { user } from "../../../functions/utils";
import { useState } from "react";

export default function FriendRequests() {
  const [requests, setRequests] = useState(user.pending_requests);

  return (
    <div className="flex flex-grow bg-light-pink items-center justify-center pl-32">
      <div className="mt-12 gap-4 bg-transparent-white p-8 rounded-lg flex-grow self-start">
        <h1 className="text-2xl mb-6 text-font-gray">Friend Requests</h1>
        <ul>
          {requests.map((request) => {
            return (
              <FriendRequest
                key={request}
                friend={request}
                setRequests={setRequests}
              />
            );
          })}
        </ul>
      </div>
      <img className="w-[600px]" src="/images/requests.png" alt="" />
    </div>
  );
}
