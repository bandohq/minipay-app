"use client";
import Image from "next/image";
import { BandoWidget, WidgetConfig } from "@bandohq/widget";

export default function UnderConstruction() {
  const widgetConfig: WidgetConfig = {
    integrator: "bando-minipay",
    theme: {
      container: {
        border: "1px solid rgb(234, 234, 234)",
        borderRadius: "16px",
      },
    },
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-colors-primaryComp text-white relative overflow-hidden">
      <Image
        src="/building-lines.webp"
        alt="Bando.cool background"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        width={692}
        height={400}
      />
      <div className="relative bg-white/70 backdrop-blur-md rounded-xl p-8 text-center shadow-lg">
        <Image
          src="/bando_full_green.png"
          alt="Bando.cool logo"
          width={200}
          height={200}
          className="mx-auto mb-4"
        />
        
        <BandoWidget integrator="bando-minipay" config={widgetConfig} />
        <p className="text-lg mb-6 text-[#333]">
          We are working on something exciting at Bando.cool
        </p>
        <a
          href="https://bando.cool/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-colors-primaryComp text-white font-semibold rounded-md shadow-md hover:bg-gray-200 hover:text-black transition duration-300 ease-in-out"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
