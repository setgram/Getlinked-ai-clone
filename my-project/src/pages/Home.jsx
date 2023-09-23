import React from "react";
import Register from "../components/Register";
import Readmore from "../components/Readmore";

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
import plus from "../assets/plus.png";
import casual from "../assets/casual.png";
import award from "../assets/award.png";
import reward from "../assets/Rewards.png";
import partner from "../assets/partner.png";
import persontwo from "../assets/persontwo.png";
import key from "../assets/key.png";
import logo from "../assets/getlinked.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { FiFacebook } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

export default function Home() {
  return (
    <>
      <div className="max-w-6xl mx-auto text-white md:mt-10 text-center lg:text-left">
        <div className="md:flex justify-between flex">
          <img src={starImage} alt="star" className="md:mt-20 mt-20" />
          <div className="md:mt-12">
            <h3 className="italic text-3xl">
              Igniting a Revolution in HR Innovation
            </h3>
            <img
              src={vectorImage}
              alt="vector image"
              className="ml-auto w-40"
            />
          </div>
        </div>
        <div className="md:flex justify-between flex-wrap">
          <div>
            <img src={creativeImage} alt="Creative" className="mb-0 ml-[70%]" />
            <h1 className="text-6xl font-bold w-full mb-3">getlinked Tech</h1>
            <div className="flex items-center">
              <h1 className="text-6xl font-bold mb-5 w-full">
                Hackathon <span className="text-[#D434FE]">1.0</span>
              </h1>
              <img src={chainImage} alt="Chain" className="w-10" />
              <img src={sparkImage} alt="Spark" className="w-10" />
            </div>
            <p>Participate in getlinked tech Hackathon 2023 stand </p>
            <p className="mb-6">a chance to win a Big prize</p>
            <Register className="mb-10 mt-5" />
            <img
              className="mb-5 mt-5 mx-auto lg:mx-0"
              src={countdownImage}
              alt="countdown image"
            />
          </div>

          <div className="relative w-96 h-96 mx-auto">
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
        <section className=" block lg:flex justify-between mt-6 relative space-x-16 items-center mb-8 lg:mb-0">
          <img
            className="w-5 h-5 absolute bottom-4 left-2 top-3"
            src={sata}
            alt="star image"
          />
          <img
            className="mb-6 w-80 mx-auto lg:w-full "
            src={idea}
            alt="idea image"
          />
          <div>
            <h2 className="text-2xl font-bold">Introduction to getlinked</h2>
            <h3 className="text-[#D434FE] text-2xl font-bold mt-2 mb-2">
              tech Hackathon 1.0
            </h3>
            <p className>
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </div>
        </section>
        <hr />
        <section className="block mt-6 lg:mt-0 lg:flex items-center">
          <div>
            <h2 className="text-2xl font-bold">Rules and</h2>
            <h2 className="text-2xl text-[#D434FE] mt-1 mb-1 font-bold">
              Guidelines
            </h2>
            <p>
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </div>
          <img src={lady} alt="" />
        </section>
        <hr />
        <section className="block lg:flex items-center mt-10 mb-10">
          <img src={persons} alt="" />
          <div>
            <h2 className="text-2xl font-bold">Judging Criteria</h2>
            <h2 className="text-2xl text-[#D434FE] font-bold">
              Key attributes
            </h2>
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
              target audience? Judges would assess the potential social,
              economic, or environmental benefits.
              <br />
              <br />
              <span className="text-[#FF26B9]">Technical Complexity:</span>{" "}
              Evaluate the technical sophistication of the solution. Judges
              would consider the complexity of the code, the use of advanced
              technologies or algorithms, and the scalability of the solution.
              <br />
              <br />
              <span className="text-[#FF26B9]">
                Adherence to Hackathon Rules:
              </span>{" "}
              Judges will Ensure that the team adhered to the rules and
              guidelines of the hackathon, including deadlines, use of specific
              technologies or APIs, and any other competition-specific
              requirements.
            </p>
            <br />
            <br />
            <Readmore />
          </div>
        </section>
        <hr />
        <section className="block lg:flex items-center justify-between mt-5 lg:mt-0">
          <div>
            <img src={sata} alt="" className="mb-2" />
            <h2 className="text-2xl font-bold">Frequently Ask</h2>
            <h2 className="text-[#D434FE] text-2xl font-bold mb-2">Question</h2>
            <p>We got answers to the questions that you might</p>
            <p>
              want to ask about <strong>getlinked Hackathon 1.0</strong>
            </p>
            <br />
            <br />
            <br />
            <div className="flex gap-1 items-center">
              <p>Can I work on a project I started before the hackathon? </p>
              <img src={plus} alt="" className="w-[10px] h-[10px]" />
            </div>
            <br />
            <hr />
            <div className="flex gap-1 items-center">
              <p>What happens if I need help during the hackathon? </p>
              <img src={plus} alt="" className="w-[10px] h-[10px]" />
            </div>
            <br />
            <hr />
            <div className="flex gap-1 items-center">
              <p>What happens if I don't have an idea for a project? </p>
              <img src={plus} alt="" className="w-[10px] h-[10px]" />
            </div>
            <br />
            <hr />
            <div className="flex gap-1 items-center">
              <p>Can I join a team or do I have to come with one? </p>
              <img src={plus} alt="" className="w-[10px] h-[10px]" />
            </div>
            <br />
            <hr />
            <div className="flex gap-1 items-center">
              <p>What happens after the hackathon ends </p>
              <img src={plus} alt="" className="w-[10px] h-[10px]" />
            </div>
            <br />
            <hr />
            <div className="flex gap-1 items-center">
              <p>Can I work on a project I started before the hackathon? </p>
              <img src={plus} alt="" className="w-[10px] h-[10px]" />
            </div>
            <br />
            <hr />
          </div>
          <img src={casual} alt="casual" className="" />
        </section>
        <hr />
        <section className="block">
          <div className="text-center mt-5">
            <h1 className="text-2xl font-bold">Timeline</h1>
            <p>Here is the breakdown of the time we anticipate </p>
            <p>using for the upcoming event.</p>
          </div>
          <div className="flex items-center space-x-10 ml-20">
            <div>
              <p className="text-lg text-[#D434FE] font-bold">
                Hackathon Announcement
              </p>
              <p>
                The getlinked tech hackathon 1.0 is formally announced <br /> to
                the general public and teams begin to get ready to register
              </p>
            </div>
            <div className="text-center">
              <div class="h-20 bg-[#D434FE] w-1 ml-3 mb-1 mt-20 mx-auto"></div>
              <div class="w-7 h-7 bg-[#D434FE] rounded-full flex justify-center items-center">
                <span class="text-white text-center">1</span>
              </div>{" "}
            </div>
            <div>
              <p className="text-[#D434FE]">November 18, 2023</p>
            </div>
          </div>
          <div className="flex items-center space-x-10 ml-20">
            <div>
              <p className="text-[#D434FE]">November 18, 2023</p>
            </div>
            <div className="text-center">
              <div class="h-20 bg-[#D434FE] w-1 ml-3 mb-1 mt-20"></div>
              <div class="w-7 h-7 bg-[#D434FE] rounded-full flex justify-center items-center">
                <span class="text-white text-center">2</span>
              </div>{" "}
            </div>
            <div>
              <p className="text-lg text-[#D434FE] font-bold">
                Teams Registration begins
              </p>
              <p>
                Interested teams can now show their interest in the <br />
                getlinked tech hackathon 1.0 2023 by proceeding to register
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-10 ml-20">
            <div>
              <p className="text-lg text-[#D434FE] font-bold">
                Teams Registration ends
              </p>
              <p>Interested Participants are no longer Allowed to register</p>
            </div>
            <div className="text-center">
              <div class="h-20 bg-[#D434FE] w-1 ml-3 mb-1 mt-20"></div>
              <div class="w-7 h-7 bg-[#D434FE] rounded-full flex justify-center items-center">
                <span class="text-white text-center">3</span>
              </div>{" "}
            </div>
            <div>
              <p className="text-[#D434FE]">November 18, 2023</p>
            </div>
          </div>
          <div className="flex items-center space-x-10 ml-20">
            <div>
              <p className="text-[#D434FE]">November 18, 2023</p>
            </div>
            <div className="text-center">
              <div class="h-20 bg-[#D434FE] w-1 ml-3 mb-1 mt-20"></div>
              <div class="w-7 h-7 bg-[#D434FE] rounded-full flex justify-center items-center">
                <span class="text-white text-center">4</span>
              </div>{" "}
            </div>
            <div>
              <p className="text-[#D434FE]">
                Announcement of the accepted teams and ideas
              </p>
              <p>
                All teams whom idea has been accepted into getlinked <br /> tech
                hackathon 1.0 2023 are formally announced
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-10 ml-20">
            <div>
              <p className="text-lg text-[#D434FE] font-bold">
                Getlinked Hackathon 1.0 Offically Begins{" "}
              </p>
              <p>
                Accepted teams can now proceed to build their <br /> ground
                breaking skill driven solutions
              </p>
            </div>
            <div className="text-center">
              <div class="h-20 bg-[#D434FE] w-1 ml-3 mb-1 mt-20"></div>
              <div class="w-7 h-7 bg-[#D434FE] rounded-full flex justify-center items-center">
                <span class="text-white text-center">5</span>
              </div>
            </div>
            <div>
              <p className="text-[#D434FE]">November 18, 2023</p>
            </div>
          </div>
          <div className="flex items-center space-x-10 ml-20">
            <div>
              <p className="text-lg text-[#D434FE] font-bold">
                November 18, 2023{" "}
              </p>
            </div>
            <div className="text-center">
              <div class="h-20 bg-[#D434FE] w-1 ml-3 mb-1 mt-20"></div>
              <div class="w-7 h-7 bg-[#D434FE] rounded-full flex justify-center items-center">
                <span class="text-white text-center">6</span>
              </div>
            </div>
            <div>
              <p className="text-[#D434FE]">Demo Day</p>
              <p>
                Teams get the opportunity to pitch their projects to judges.
                <br /> The winner of the hackathon will also be announced on
                this day
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="block lg:flex justify-end mt-14">
            <div></div>
            <div>
              <h1 className="text-2xl text-[#D434FE] font-bold">Prizes and</h1>
              <h1 className="text-2xl text-[#D434FE] font-bold"> Rewards</h1>
              <p>
                Highlight of the prizes or rewards for winners and <br /> for
                participant
              </p>
            </div>
          </div>
          <div className="flex mt-14 mb-14">
            <img src={award} alt="award" className="w-full" />
            <img src={reward} alt="reward" className="w-full" />
          </div>
        </section>
        <section>
          <div className="text-center mt-10 ">
            <h1 className="text-2xl font-bold">Partners and Sponsors</h1>
            <p>
              Getlinked Hackathon 1.0 is honored to have the following major{" "}
              <br />
              companies as its partners and sponsors
            </p>
          </div>
          <img className="mt-10 mb-10" src={partner} alt="" />
        </section>
        <section className="mt-12 mb-60 lg:mb-0">
          <div>
            <h1 className="font-bold text-2xl">Privacy Policy and</h1>
            <h1 className="font-bold text-2xl text-[#D434FE]">Terms</h1>
            <br />
            <p>Last updated on September 12. 2023</p>
            <br />
            <br />
            <p className="mb-12">
              Below are our privacy & policy, which outline a lot of goodies.
              <br />
              it’s our aim to always take of our participant
            </p>
          </div>
          <div className="block lg:flex justify-between ml-24 lg:ml-0 mb-10 ">
            <div className="h-[100%] border-2 border-purple-500 w-96 p-10 text-center">
              <p className="text-left">
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </p>
              <br />
              <br />
              <p className="text-[#D434FE] font-bold text-left">
                Licensing Policy
              </p>
              <p className="text-left font-semibold">
                Here are terms of our Standard License:
              </p>
              <ul className="list-disc">
                <li className="ml-6 text-left">
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </li>
                <br />
                <li className="ml-6 text-left">
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </li>
              </ul>
              <br />
              <Readmore />
            </div>
            <div className="relative w-96 h-96">
              <img
                src={persontwo}
                alt=""
                className="w-full h-full absolute top-40 right-10 opacity-50"
              />
              <img
                src={key}
                alt=""
                className="w-full h-full absolute top-5 left-0 opacity-50"
              />
            </div>
          </div>
        </section>
        <footer className="bg-[#100B20] text-white p-16 block lg:flex justify-between text-justify space-y-4 lg:space-y-0">
          <div>
            <img src={logo} alt="" className="mb-5" />
            <p>
              Getlinked Tech Hackathon is a technology innovation program <br />
              established by a group of organizations with the aim of showcasing{" "}
              <br />
              young and talented individuals in the field of technology
            </p>
            <br />
            <p>
              Terms of Use{" "}
              <div className="w-1 h-7 bg-purple-900 inline-block"></div> Privacy
              Policy
            </p>
          </div>
          <div>
            <h1 className="text-2xl text-[#D434FE] font-bold mb-3">
              Useful Links
            </h1>
            <ul>
              <a href="#">
                <li>Overview</li>
              </a>
              <a href="#">
                <li>Timeline</li>
              </a>
              <a href="#">
                <li>FAQs</li>
              </a>
              <a href="#">
                <li>Regular</li>
              </a>
            </ul>
            <div className="flex items-center gap-1">
              <h2 className="text-xl font-bold text-[#D434FE]">Follow us</h2>
              <div className="flex gap-2 w-20 h-2">
                <AiOutlineInstagram />
                <RiTwitterXFill />
                <FiFacebook />
                <CiLinkedin />
              </div>
            </div>
          </div>
          <br />
          <div>
            <h1 className="text-2xl text-[#D434FE] font-bold">Contact Us</h1>
            <br />
            <div className="flex gap-4 items-center">
              <BsFillTelephoneFill />
              <p>+234 6707653444</p>
            </div>
            <br />

            <div className="flex gap-4">
              <CiLocationOn />
              <p>
                27,Alara Street <br />
                Yaba 100012 <br />
                Lagos State
              </p>
            </div>
          </div>
        </footer>
        <p className="text-center p-5">All rights reserved. © getlinked Ltd.</p>
      </div>
    </>
  );
}
