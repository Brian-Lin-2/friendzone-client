import Text from "./Text";

export default function Texts() {
  return (
    <div className="flex flex-col-reverse flex-grow items-start pl-8 pr-10 gap-2">
      <Text message="yes" user={true} />
      <Text message="hello nice to meet you" user={false} />
      <Text message="hi" user={true} />
    </div>
  );
}
