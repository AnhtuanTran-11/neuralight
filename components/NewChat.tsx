"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { BsPlusCircle } from "react-icons/bs";

function NewChat() {
  const { data: session } = useSession();
  const router = useRouter();

  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        userID: session?.user?.email!,
        createdAt: serverTimestamp(),
      }
    );
    router.push(`/chat/${doc.id}`);
  };

  return (
    <div onClick={createNewChat} className="newChat shadow-button">
      <BsPlusCircle className="h-5 w-5 mr-4" />
      <p>New Chat</p>
    </div>
  );
}

export default NewChat;
