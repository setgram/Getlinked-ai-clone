import React from "react";
import Register from "./Register";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className=" shadow-sm static top-0 z-40">
      <header className="flex justify-between items-center max-w-6xl mx-auto p-5 lg:block">
        <img
          src="./src/assets/getlinked.png"
          alt="logo"
          className="cursor-pointer"
          onClick={() => navigate("/")}
        />

        <div className="flex gap-28 items-center">
          <ul className="text-white flex space-x-6 md:flex md:items-center">
            <li
              className={`cursor-pointer ${
                pathMatchRoute("/") && "text-green-500 border-b"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer ${
                pathMatchRoute("/time-line") && "text-green-500 border-b"
              }`}
              onClick={() => navigate("/time-line")}
            >
              Timeline
            </li>
            <li
              className={`cursor-pointer ${
                pathMatchRoute("/overview") && "text-green-500 border-b"
              }`}
              onClick={() => navigate("/overview")}
            >
              Overview
            </li>
            <li
              className={`cursor-pointer ${
                pathMatchRoute("/faqs") && "text-green-500 border-b"
              }`}
              onClick={() => navigate("/faqs")}
            >
              FAQs
            </li>
            <li
              className={`cursor-pointer ${
                pathMatchRoute("/contact") && "text-green-500 border-b"
              }`}
              onClick={() => navigate("/contact")}
            >
              Contact
            </li>
          </ul>
          <Register />
        </div>
      </header>
    </div>
  );
}
