import React, { useState } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { FiFacebook } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

export default function Contact() {
  const baseUrl = "https://backend.getlinked.ai";
  const [formData, setFormData] = useState({
    first_name: "",
    email: "",
    message: "",
  });
  const { first_name, email, message } = formData;
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${baseUrl}/hackathon/contact-form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-6xl text-white mx-auto block lg:flex justify-between items-center  p-6 mt-9 mb-9">
      <div>
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
        <div className="flex gap-2 w-20 h-2 mb-9">
          <AiOutlineInstagram />
          <RiTwitterXFill />
          <FiFacebook />
          <CiLinkedin />
        </div>
      </div>

      <div className="border-none w-full h-full p-10 bg-slate-800 rounded text-center">
        <form onSubmit={onSubmit} className="p-8">
          <input
            type="text"
            id="first_name"
            value={first_name}
            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            onChange={onChange}
            placeholder="Full Name"
          />
          <input
            type="email"
            id="email"
            value={email}
            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            onChange={onChange}
            placeholder="Email address"
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            value={message}
            placeholder="Message"
            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            onChange={onChange}
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 border-1 border-solid text-white py-2 px-10 mx-auto rounded-[3px] mt-6"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
