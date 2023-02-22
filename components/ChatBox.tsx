"use client";

import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import { AiOutlineArrowDown } from "react-icons/ai";
import Message from "./Message";

type Props = {
  chatID: string;
};

function ChatBox({ chatID }: Props) {
  const { data: session } = useSession();
  const [messages] = useCollection(
    session &&
      query(
        collection(
          db,
          "users",
          session?.user?.email!,
          "chats",
          chatID,
          "messages"
        ),
        orderBy("createdAt", "asc")
      )
  );
  return (
    <div className="flex-1 overflow-scroll overflow-x-hidden mt-10 md:m-0">
      {messages?.empty && (
        <>
          <p className="mt-10 text-center text-white">
            Ask a question to get started.
          </p>
          <AiOutlineArrowDown className="h-10 w-10 mx-auto mt-7 text-white animate-bounce" />
        </>
      )}
      {messages?.docs.map((message) => (
        <Message key={message.id} message={message.data()} />
      ))}
    </div>
  );
}

export default ChatBox;
