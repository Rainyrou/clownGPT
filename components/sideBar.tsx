"use client";

import React from "react";
import NewChat from "./newChat";
import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import ChatRow from "./chatRow";
import ModelSelection from "react-select";

function SideBar() {
  const { data: session } = useSession();
  const [chats, isLoading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createAt", "asc")
      )
  );

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1 ">
        <div>
          <NewChat />
          <div className="hidden sm:inline">
            <ModelSelection />
          </div>
          <div className="flex flex-col space-y-2">
            {isLoading && (
              <div className="animate-pluse text-center text-white">
                <p>Loading Chats...</p>
              </div>
            )}
            {chats?.docs.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
      </div>
      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image!}
          alt="Profile"
          className="h-12 w-12 mx-auto mb-2 hover:opacity-40 rounded-full cursor-pointer"
        />
      )}
    </div>
  );
}

export default SideBar;
