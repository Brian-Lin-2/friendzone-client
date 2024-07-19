import FriendRequest from "./FriendRequest";
import useUser from "../../../functions/user";

export default function FriendRequests() {
  const { user } = useUser();

  return (
    <div className="flex flex-grow bg-light-pink items-center justify-center pl-32">
      <div className="mt-12 gap-4 bg-transparent-white p-8 rounded-lg flex-grow self-start min-h-[90%]">
        <h1 className="text-2xl mb-6 text-font-gray">Friend Requests</h1>
        <ul className="max-h-[520px] overflow-y-scroll">
          {user.pending_requests.map((request) => {
            return <FriendRequest key={request._id} friend={request} />;
          })}
        </ul>
      </div>
      <img className="w-[600px]" src="/images/requests.png" alt="" />
    </div>
  );
}
