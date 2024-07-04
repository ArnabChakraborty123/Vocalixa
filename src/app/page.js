"use client"
import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import { Mic } from "lucide-react";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[url('/images/Designerback1.jpeg')] bg-contain bg-center bg-no-repeat">
      <h1 className="text-white text-6xl font-bold leading-none pt-4 vocaixa-heading">
        Vocalixa
      </h1>
      <div className="mt-64">
      <p className="text-white">
        CHANGE YOUR TEXT TO SPEECH USING AMAZON POLLY
      </p>
      <button
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-2 px-4 rounded items-center ml-40 flex"
          onClick={() => router.push("/dashboard")}
        >
          Get Started
          <Mic size={20} />
        </button>
      </div>
    </main>
  );
}