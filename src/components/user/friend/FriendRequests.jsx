import FriendRequest from "./FriendRequest";
import useUser from "../../../functions/user";

export default function FriendRequests() {
  const { user } = useUser();

  return (
    <div className="flex flex-grow bg-light-pink items-center justify-center p-6 md:p-0 md:px-32 lg:pl-32">
      <div className="mt-12 gap-4 bg-transparent-white p-8 rounded-lg flex-grow self-start min-h-[90%]">
        <h1 className="text-2xl mb-6 text-font-gray">Friend Requests</h1>
        <ul className="max-h-[400px] md:max-h-[520px] overflow-y-scroll">
          {user.pending_requests.map((request) => {
            return <FriendRequest key={request._id} friend={request} />;
          })}
        </ul>
      </div>
      <img
        className="hidden lg:block w-[30vw]"
        src="/images/requests.png"
        alt=""
      />
    </div>
  );
}
