import React, { useState } from "react";
import Register from "./Register";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  function pathMatchRoute(route) {
    return route === location.pathname;
  }

  return (
    <div className="shadow-sm static top-0 z-40">
      <header className="flex justify-between items-center max-w-6xl mx-auto p-5">
        <img
          src="./src/assets/getlinked.png"
          alt="logo"
          className="cursor-pointer"
          onClick={() => navigate("/")}
        />

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div
          className={`md:hidden ${
            isMobileMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 right-0 bg-[#150e28] py-3`}
        >
          <ul className="text-white text-center space-y-3">
            <li
              className={`cursor-pointer ${
                pathMatchRoute("/") && "text-green-500"
              }`}
              onClick={() => {
                navigate("/");
                closeMobileMenu();
              }}
            >
              Home
            </li>
            <li
              className={`cursor-pointer ${
                pathMatchRoute("/time-line") && "text-green-500"
              }`}
              onClick={() => {
                navigate("/time-line");
                closeMobileMenu();
              }}
            >
              Timeline
            </li>
            <li
              className={`cursor-pointer ${
                pathMatchRoute("/overview") && "text-green-500"
              }`}
              onClick={() => {
                navigate("/overview");
                closeMobileMenu();
              }}
            >
              Overview
            </li>
            <li
              className={`cursor-pointer ${
                pathMatchRoute("/faqs") && "text-green-500"
              }`}
              onClick={() => {
                navigate("/faqs");
                closeMobileMenu();
              }}
            >
              FAQs
            </li>
            <li
              className={`cursor-pointer ${
                pathMatchRoute("/contact") && "text-green-500"
              }`}
              onClick={() => {
                navigate("/contact");
                closeMobileMenu();
              }}
            >
              Contact
            </li>
            <Link to="/registration">
              <Register />
            </Link>
          </ul>
        </div>

        <div className="hidden md:flex gap-28 items-center">
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
          <Link to="/registration">
            <Register />
          </Link>
        </div>
      </header>
    </div>
  );
}
