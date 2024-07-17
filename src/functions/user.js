import { useContext } from "react";
import { UserContext } from "../components/context/UserContextProvider";

function useUser() {
  return useContext(UserContext);
}

export default useUser;
