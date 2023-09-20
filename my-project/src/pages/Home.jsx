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
import sata from "../assets/sata.png";
import idea from "../assets/idea.png";
import lady from "../assets/lady.png";
import persons from "../assets/persons.png";

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
      <hr />
      <section className="flex justify-between mt-6 relative space-x-16 items-center">
        <img
          className="w-5 h-5 absolute bottom-4 left-2 top-3"
          src={sata}
          alt="star image"
        />
        <img className="mb-6" src={idea} alt="idea image" />
        <div>
          <h2 className="text-2xl font-bold">Introduction to getlinked</h2>
          <h3 className="text-[#D434FE] text-2xl font-bold mt-2 mb-2">
            tech Hackathon 1.0
          </h3>
          <p className>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </section>
      <hr />
      <section className="flex items-center">
        <div>
          <h2 className="text-2xl font-bold">Rules and</h2>
          <h2 className="text-2xl text-[#D434FE] mt-1 mb-1 font-bold">
            Guidelines
          </h2>
          <p>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
        <img src={lady} alt="" />
      </section>
      <hr />
      <section className="flex items-center mt-10">
        <img src={persons} alt="" />
        <div>
          <h2 className="text-2xl font-bold">Judging Criteria</h2>
          <h2 className="text-2xl text-[#D434FE] font-bold">Key attributes</h2>
          <p>
            <span className="text-[#FF26B9]">Innovation and Creativity:</span>
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
            <br />
            <br />
            <span className="text-[#FF26B9]">Functionality</span> Assess how
            well the solution works. Does it perform its intended functions
            effectively and without major issues? Judges would consider the
            completeness and robustness of the solution.
            <br />
            <br />
            <span className="text-[#FF26B9]">Impact and Relevance:</span>{" "}
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.
            <br />
            <br />
            <span className="text-[#FF26B9]">Technical Complexity:</span>{" "}
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
            <br />
            <br />
            <span className="text-[#FF26B9]">
              Adherence to Hackathon Rules:
            </span>{" "}
            Judges will Ensure that the team adhered to the rules and guidelines
            of the hackathon, including deadlines, use of specific technologies
            or APIs, and any other competition-specific requirements.
          </p>
        </div>
      </section>
    </div>
  );
}
