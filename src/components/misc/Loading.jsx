import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Loading() {
  return (
    <div className="flex-grow flex items-center justify-center">
      <FontAwesomeIcon className="animate-spin h-10" icon={faSpinner} />
    </div>
  );
}
