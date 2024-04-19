"use client";

import React from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-[#11A37F]">
      <Image
        src="https://links.papareact.com/2i6"
        width={300}
        height={300}
        alt="logo"
      />
      <button
        onClick={() => signIn("github")}
        className="text-white font-bold text-3xl animate-pulse"
      >
        Sign In to use ChatGPT
      </button>
    </div>
  );
}

export default Login;
