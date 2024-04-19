"use client";

import React from "react";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import Message from "./message";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

type Props = {
  chatId: string;
};

function Chat({ chatId }: Props) {
  const { data: session } = useSession();
  const [messages] = useCollection(
    session &&
      query(
        collection(
          db,
          "users",
          session?.user?.email!,
          "chats",
          chatId,
          "messages"
        ),
        orderBy("createAt", "asc")
      )
  );
  return (
    <div className="flex-1 overflow-y-auto over-x-hidden">
      {messages?.empty && (
        <>
          <p className="mt-10 text-center text-white">
            Type a prompt in blow to get started!
          </p>
          <ArrowDownCircleIcon className="h-10 w-10 mt-5 mx-auto text-white animate-bounce" />
        </>
      )}
      {messages?.docs.map((message) => (
        <Message key={message.id} message={message.data()} />
      ))}
    </div>
  );
}

export default Chat;
