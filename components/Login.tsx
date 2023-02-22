"use client";
import { signIn } from "next-auth/react";
import Neuralight from "../public/Neuralight.png";
import Image from "next/image";

function Login() {
  return (
    <div className="backGround h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <Image
        src={Neuralight}
        alt="logo"
        className="pointer-events-none max-h-[25rem] max-w-[25rem] animate-pulse"
        priority
      />
      <button
        onClick={() => signIn("google")}
        className="mt-10 font-bold text-3xl textColor"
      >
        Login with your Google account
      </button>
    </div>
  );
}

export default Login;
