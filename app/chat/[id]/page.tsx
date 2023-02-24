import ChatBox from "../../../components/ChatBox";
import ChatInput from "../../../components/ChatInput";

type Props = {
  params: {
    id: string;
  };
};
function ChatPage({ params: { id } }: Props) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <ChatBox chatID={id} />
      <ChatInput chatID={id} />
    </div>
  );
}

export default ChatPage;
