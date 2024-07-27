import FriendRequest from "./FriendRequest";
import Loading from "../../misc/Loading";
import { useState, useEffect } from "react";
import { getRequests } from "../../../functions/user";

export default function FriendRequests() {
  const [requests, setRequests] = useState(null);

  useEffect(() => {
    async function populateRequests() {
      setRequests(await getRequests());
    }

    populateRequests();
  }, []);

  return (
    <div className="flex flex-grow bg-light-pink items-center justify-center p-6 md:p-0 md:px-32 lg:pl-32">
      <div className="mt-12 gap-4 bg-transparent-white p-8 rounded-lg flex-grow self-start flex flex-col min-h-[90%]">
        <h1 className="text-2xl text-font-gray">Friend Requests</h1>
        <div className="flex-grow flex flex-col">
          {requests ? (
            <ul className="md:max-h-[520px] md:overflow-y-scroll">
              {requests.map((request) => {
                return (
                  <FriendRequest
                    key={request._id}
                    friend={request}
                    requests={requests}
                    setRequests={setRequests}
                  />
                );
              })}
            </ul>
          ) : (
            <div className="flex-grow flex flex-col mb-20">
              <Loading />
            </div>
          )}
        </div>
      </div>
      <img
        className="hidden lg:block w-[30vw]"
        src="/images/requests.png"
        alt=""
      />
    </div>
  );
}
