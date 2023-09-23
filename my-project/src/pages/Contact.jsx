import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { FiFacebook } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

export default function Contact() {
  return (
    <div>
      <div className="max-w-6xl">
        <h1 className="text-purple text-3xl font-bold mb-5">Get in touch</h1>
        <p>Contact</p>
        <p className="mb-5">Information</p>
        <p>27, Alara Street</p>
        <p>Yaba 100012</p>
        <p className="mb-5">Lagos State</p>
        <p className="mb-5">Call Us: 07067981819</p>
        <p>We are open from Monday-Friday</p>
        <p className="mb-8">08:00am - 05:00pm</p>
        <p className="font-bold mb-3">Share on</p>
        <div className="flex gap-2 w-20 h-2">
          <AiOutlineInstagram />
          <RiTwitterXFill />
          <FiFacebook />
          <CiLinkedin />
        </div>
      </div>
      <form></form>
    </div>
  );
}
