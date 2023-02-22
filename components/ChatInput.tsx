"use client";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import { db } from "../firebase";
import { HiOutlinePaperAirplane } from "react-icons/hi";

type Props = {
  chatID: string;
};
function ChatInput({ chatID }: Props) {
  const { data: session } = useSession();
  const [prompt, setPrompt] = useState("");

  const sendQuestion = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!prompt) return;

    const input = prompt.trim();
    setPrompt("");

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        userID: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatar.com/api/?name=${session?.user?.name}`,
      },
    };

    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatID,
        "messages"
      ),
      message
    );

    await fetch("/api/askQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
        session,
        chatID,
      }),
    });
  };
  return (
    <div>
      <form onSubmit={sendQuestion} className="flex p-5 space-x-5 textColor">
        <input
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          value={prompt}
          placeholder="Ask a question here."
          disabled={!session}
          className="flex-1 bg-transparent border-[#FBC492] border-2 rounded-full p-3 focus:outline-none disabled:cursor-not-allowed disabled:text-gray-300"
        />
        <button
          disabled={!prompt || !session}
          type="submit"
          className="disabled:cursor-not-allowed"
        >
          <HiOutlinePaperAirplane className="h-6 w-6 rotate-45 lightOrange hover:opacity-50" />
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
