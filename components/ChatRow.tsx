"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { BiMessageRounded } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import Link from "next/link";

type Props = {
  id: string;
};
function ChatRow({ id }: Props) {
  const { data: session } = useSession();
  const [active, setActive] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const [messages] = useCollection(
    collection(db, "users", session?.user?.email!, "chats", id, "messages")
  );

  useEffect(() => {
    if (pathname) {
      setActive(pathname.includes(id));
    } else {
      return;
    }
  }, [pathname]);

  const deleteChat = async () => {
    await deleteDoc(doc(db, "users", session?.user?.email!, "chats", id));
    router.replace("/");
  };

  return (
    <Link
      href={`/chat/${id}`}
      className={`chatRow shadow-chatRow ${active && "lightOrange"}`}
    >
      <BiMessageRounded />
      <p className="truncate flex-1 px-5">
        {messages?.docs[messages?.docs?.length - 1]?.data().text || "New Chat"}
      </p>
      <FiTrash2 onClick={deleteChat} className="hover:opacity-50" />
    </Link>
  );
}

export default ChatRow;
