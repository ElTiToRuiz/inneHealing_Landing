import { Check, Sparkles } from "lucide-react";
import { ButtonPage } from "./react/button";
import { BadgePage } from "./react/badge";
import { ImagePage } from "./react/image";
import { Separator } from "./ui/separator";

const safeSpaceItems = [
  "Identify the subconscious beliefs keeping you stuck",
  "Rewire your mind using Rapid Transformational Therapy®",
  "Release emotional blocks and reconnect with your true self",
];

const receiveItems = [
  {
    title: "One Deep‑Dive RTT® Session (90–120 mins)",
    subtitle: "to access and rewire the root cause",
  },
  {
    title: "Custom Hypnosis Recording",
    subtitle: "to anchor the change (daily for 21 days)",
  },
  {
    title: "Five Weekly Coaching & Integration Sessions",
    subtitle: "for accountability and guidance",
  },
  {
    title: "WhatsApp/Voxer Access",
    subtitle: "for in‑the‑moment support",
  },
  {
    title: "Bonus Healing Toolkit",
    subtitle: "worksheets, scripts, journal, and more",
  },
];


export default function Solution() {
  return (
    <>
    <section className="max-w-4xl mx-auto">
      <div className="z-10 flex w-full justify-center px-4">
        <div className="mx-auto w-full max-w-4xl rounded-3xl bg-white/90 p-10 shadow-2xl ring-1 ring-inset ring-[#F4EAEA] backdrop-blur-md text-center relative">
          <h2 className="mb-4 text-4xl font-bold leading-tight text-[#002D5B] md:text-6xl">
            Introducing The Inner Healing Code™
          </h2>
          <h3 className="mb-8 text-3xl font-medium text-[#002D5B] md:text-4xl">
            A 6-Week RTT® + Coaching Program
          </h3>

          <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
            At the core of our program lies a commitment to helping women reclaim their joy, confidence, and clarity
            through powerful transformational techniques.
          </p>

          <div className="flex justify-center">
            <ButtonPage text="Begin Your Healing Journey" />
          </div>          
        </div>
      </div>

      <div className="px-4 md:px-6 my-10 lg:my-16 w-full">
        <div className="flex flex-col items-center text-center ">
          <h2 className="text-3xl font-bold text-[#002D5B] mb-8">This is your safe, sacred space to:</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {safeSpaceItems.map((copy) => (
              <div className="bg-[#EC5B53]/10 rounded-2xl p-6 shadow-sm border border-pink-100 flex flex-col items-center ring-1 ring-[#EC5B53]">
                <div className="bg-[#EC5B53]/30 rounded-full p-2 mb-4">
                  <Check className="h-6 w-6 text-[#e3443c]" />
                </div>
                <p className="text-[#555A5E]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <Separator className="my-10 max-w-6xl mx-auto"/>
    <section className="max-w-6xl min-w-4xl mx-auto">
      <div className="mt-24 px-4 ">
        <BadgePage text="What you get"/>  
        <h2 className="my-6 text-3xl font-bold text-[#002D5B] md:text-4xl">
          What You'll Receive
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div className="grid gap-6 md:gap-8 justify-start">
            {receiveItems.map(({ title, subtitle }) => (
              <div key={title} className="flex items-center gap-4 text-left">
                <div className="mt-1 flex-shrink-0">
                  <Sparkles className="h-6 w-6 text-[#EC5B53]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#002D5B]">{title}</h3>
                  <p className="text-[#555A5E]">{subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right side */}
          <div>
            <ImagePage />
          </div>

        </div>

        <div className="my-12 flex justify-center">
          <ButtonPage text="Transform Your Life Today"/>
        </div>
      </div>    
    </section>
    <Separator className="my-10 max-w-6xl mx-auto"/>
    </>
  );
}
