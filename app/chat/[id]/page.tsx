import ChatBox from "../../../components/ChatBox";
import ChatInput from "../../../components/ChatInput";
import HeightContainer from "../../../components/HeightContainer";

type Props = {
  params: {
    id: string;
  };
};
function ChatPage({ params: { id } }: Props) {
  return (
    <HeightContainer>
      <div className="flex flex-col h-full overflow-hidden">
        <ChatBox chatID={id} />
        <ChatInput chatID={id} />
      </div>
    </HeightContainer>
  );
}

export default ChatPage;
