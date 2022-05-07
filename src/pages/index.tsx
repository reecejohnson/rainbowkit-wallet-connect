import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-8">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-2xl tracking-[-1px] font-semibold text-blue-600 text-center md:text-5xl">
          RainbowKit Wallet Connection 🌈
        </h1>
        <p className="text-gray-700 text-base text-center md:text-xl">
          Example application integrating wallet connection with{" "}
          <a href="https://www.rainbowkit.com/" target="_blank">
            RainbowKit
          </a>
          .
        </p>
      </div>
      <ConnectButton />
    </div>
  );
}
