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
    <div className="flex flex-col overflow-hidden">
      <HeightContainer>
        <ChatBox chatID={id} />
        <ChatInput chatID={id} />
      </HeightContainer>
    </div>
  );
}

export default ChatPage;
