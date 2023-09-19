import React from "react";
import Register from "../components/Register";
import starImage from "../assets/star.png";
import vectorImage from "../assets/Vector 4.png";
import creativeImage from "../assets/Creative 1.png";
import chainImage from "../assets/chain.png";
import sparkImage from "../assets/spark.png";
import countdownImage from "../assets/Countdown.png";
import maleImage from "../assets/man.png";
import sparkle from "../assets/sparkle.png";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto text-white">
      <div className="flex justify-between">
        <img src={starImage} alt="star" className="mt-20" />
        <div className="mt-12">
          <h3 className="text-3xl italic">
            Igniting a Revolution in HR Innovation
          </h3>
          <img src={vectorImage} alt="vector image" className="ml-auto w-40" />
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <img src={creativeImage} alt="Creative" className="mb-0 ml-[70%]" />
          <h1 className="text-6xl font-bold w-full mb-3">getlinked Tech</h1>
          <div className="flex items-center">
            <h1 className="text-6xl font-bold mb-5">
              Hackathon <span className="text-[#D434FE]">1.0</span>
            </h1>
            <img src={chainImage} alt="Chain" className="w-10" />
            <img src={sparkImage} alt="Spark" className="w-10" />
          </div>
          <p>Participate in getlinked tech Hackathon 2023 stand </p>
          <p className="mb-6">a chance to win a Big prize</p>
          <Register className="mb-10 mt-5" />
          <img
            className="mb-5 mt-5"
            src={countdownImage}
            alt="countdown image"
          />
        </div>

        <div className="relative w-96 h-96">
          <img
            src={maleImage}
            alt="Picture of man"
            className="w-full h-full absolute top-0 left-0 opacity-50"
          />
          <img
            src={sparkle}
            alt="sparkle"
            className="w-full h-full absolute top-0 left-0 opacity-50"
          />
        </div>
      </div>
    </div>
  );
}
