import { DocumentData } from "firebase/firestore";

type Props = {
  message: DocumentData;
};

function Message({ message }: Props) {
  const isChatGPT = message.user.name == "ChatGPT";
  return (
    <div className={`py-5 text-white ${isChatGPT && "sideBar"}`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <img
          src={message?.user?.avatar!}
          alt="Profile picture"
          className="h-10 w-10"
        />
        <p className="pt-1 text-sm">{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
