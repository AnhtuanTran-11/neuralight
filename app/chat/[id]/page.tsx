import ChatBox from "../../../components/ChatBox";
import ChatInput from "../../../components/ChatInput";

type Props = {
  params: {
    id: string;
  };
};
function ChatPage({ params: { id } }: Props) {
  let vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty("--vh", `${vh}px`);

  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
  return (
    <div
      style={{ height: `calc(var(${--vh}, 1vh) * 100)` }}
      className="flex flex-col h-screen overflow-hidden"
    >
      <ChatBox chatID={id} />
      <ChatInput chatID={id} />
    </div>
  );
}

export default ChatPage;
