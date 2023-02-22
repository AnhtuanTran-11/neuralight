"use client";

import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import NewChat from "./NewChat";
import ChatRow from "./ChatRow";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";

function SideBar() {
  const { data: session } = useSession();
  const [show, setShow] = useState(false);
  const [chats, loading] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div>
      <AiOutlineMenuUnfold
        className="absolute h-10 w-10 lightOrange md:hidden cursor-pointer z-10 space-x-10 ml-3 mt-3"
        onClick={() => setShow(true)}
      />
      {show && (
        <AiOutlineClose
          className="absolute right-16 lightOrange h-10 w-10"
          onClick={() => setShow(false)}
        />
      )}

      <div
        className={`${
          show ? "flex" : "hidden"
        } flex-col h-screen p-2 textColor sideBar max-w-[18rem] min-w-[18rem] md:inline-flex z-20 absolute md:static border-2 border-t-0 border-l-0 border-r-[#FBC492] border-b-[#FBC492] `}
      >
        <div className="flex-1">
          <NewChat />
          <div className="flex flex-col space-y-3 my-2 max-w-xs">
            {loading && (
              <div className="animate-pulse text-center text-white">
                <p>Loading Chats...</p>
              </div>
            )}
            {chats?.docs.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>

        {session ? (
          <button
            onClick={() => signOut()}
            className="border-2 border-[#FBC492] shadow-button py-3 px-6 rounded-full cursor-pointer mx-auto mb-3 hover:opacity-50"
          >
            Log out
          </button>
        ) : null}
      </div>
    </div>
  );
}
export default SideBar;
