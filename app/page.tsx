import React from "react";
import { BsSun } from "react-icons/bs";
import { RxLightningBolt } from "react-icons/rx";
import { VscWarning } from "react-icons/vsc";
import ChatInput from "../components/ChatInput";

type Props = {
  chatID: string;
};

function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center text-[#EAEAEA] bg-gradient-to-r from-[#1B1B1B] via-[#121212] to-[#0A0A0A] overflow-y-scroll mt-10 md:mt-32">
      <h1 className="text-5xl font-bold mb-10 md:mb-20 [text-shadow:_2px_2px_4px_rgb(0_0_0_/_45%)] mt-20">
        Neuralight
      </h1>

      <div className="md:space-x-2 text-center flex-col md:flex md:flex-row">
        <div>
          <div className="flex flex-col justify-center items-center my-4">
            <BsSun className="h-8 w-8 lightOrange" />
            <h2 className="lightOrange">Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="info">Explain quantum computing in simple terms</p>
            <p className="info">
              Got any creative ideas for a 10 year old's birthday?
            </p>
            <p className="info">
              "How do I make an HTTP request in Javascript?"
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center my-4">
            <RxLightningBolt className="h-8 w-8 lightOrange" />
            <h2 className="lightOrange">Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="info">
              Remembers what user said earlier in the conversation
            </p>
            <p className="info">Allows user to provide follow-up corrections</p>
            <p className="info">Trained to decline inappropriate requests</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center my-4">
            <VscWarning className="h-8 w-8 lightOrange" />
            <h2 className="lightOrange">Limitations</h2>
          </div>
          <div className="space-y-2 mb-10">
            <p className="info">
              May occasionally generate incorrect information
            </p>
            <p className="info">
              May produce harmful instructions on biased content
            </p>
            <p className="info">
              Limited knowledge of the world and events after 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
