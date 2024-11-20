import React from "react";
import SparklesCore from "../components/ui/sparkles";
const Contact = () => {
  return (
    (<div
      className="h-[43rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={20}
          className="w-full  h-full"
          particleColor="#FFFFFF" />
      </div>
      <h1
        className="md:text-7xl  text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Contact Me
      </h1>

      
    </div>)
  );
}

export default Contact
